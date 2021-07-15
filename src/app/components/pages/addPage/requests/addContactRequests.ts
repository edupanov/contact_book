import {CreateContactInterface} from "../types/createContactInterface";
import {ContactsUrls} from "../../../../../urls/contactsUrls";
import {RequestSender} from "../../../../shared/services/requestSenderService/requestSender";

export const addContact = async (contact: {contact: CreateContactInterface}) => {
    const BASE_URL = "http://localhost:8080/api"

    const fullUrl = `${BASE_URL}${ContactsUrls.CREATE_CONTACTS_URL}`

    const result = await RequestSender.post(fullUrl, contact)

    return result.json()
}