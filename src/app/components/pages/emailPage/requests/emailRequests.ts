import {ContactsUrls} from "../../../../../urls/contactsUrls";
import {RequestSender} from "../../../../shared/services/requestSenderService/requestSender";

export const sendMail = async (emails: Array<string>, theme: string, text: string) => {
    const BASE_URL = "http://localhost:8080/api"

    const fullUrl = `${BASE_URL}${ContactsUrls.SEND_MAIL}`

    const result = await RequestSender.post(fullUrl, {emails, theme, text})

    return result.json()
}


