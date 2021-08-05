import {ContactsUrls} from "../../../../../../../urls/contactsUrls";
import {RequestSender} from "../../../../../../shared/services/requestSenderService/requestSender";

export const login = async (email: string, password: string) => {
    const BASE_URL = "http://localhost:8080/api"

    const fullUrl = `${BASE_URL}${ContactsUrls.GET_LOGIN_URL}`

    const result = await RequestSender.post(fullUrl, {email, password})

    return result.json()
}



