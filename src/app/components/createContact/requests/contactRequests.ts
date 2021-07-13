import {CreateContactInterface} from "../types/createContact.interface";
import {ContactsUrls} from "../../../../urls/contactsUrls";
import {RequestSender} from "../../../shared/services/requestSenderService/requestSender";

export const getContact = async (contact: CreateContactInterface) => {
    const BASE_URL = "http://localhost:8080/api"

    const fullUrl = `${BASE_URL}${ContactsUrls.SET_USER_URL}`

    const result = await RequestSender.post(fullUrl, contact)

    return result.json()
}

export const addContact = async (contact: CreateContactInterface) => {
    const BASE_URL = "http://localhost:8080/api"

    const fullUrl = `${BASE_URL}${ContactsUrls.SET_USER_URL}`

    const result = await RequestSender.post(fullUrl, contact)

    return result.json()
}