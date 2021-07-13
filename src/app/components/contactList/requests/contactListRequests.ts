import {ContactsUrls} from "../../../../urls/contactsUrls";
import {RequestSender} from "../../../shared/services/requestSenderService/requestSender";

export const getContact = async (search: any) => {
    const BASE_URL = "http://localhost:8080/api"

    const fullUrl = `${BASE_URL}${ContactsUrls.GET_CONTACTS_URL}`

    const result = await RequestSender.post(fullUrl, search)

    return result.json()
}