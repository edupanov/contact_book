import {ContactsUrls} from "../../../../../urls/contactsUrls";
import {RequestSender} from "../../../../shared/services/requestSenderService/requestSender";
import {ContactInterface} from "../../../contactList/types/contact.interface";

export const deleteContact = async (contact: [contact: ContactInterface]) => {
    const BASE_URL = "http://localhost:8080/api"

    const fullUrl = `${BASE_URL}${ContactsUrls.DELETE_CONTACTS_URL}`

    const result = await RequestSender.post(fullUrl, contact)

    return result.json()
}