import {ContactsUrls} from "../../../../urls/contactsUrls";
import {RequestSender} from "../../../shared/services/requestSenderService/requestSender";

export const getContact = async (search: any) => {

    const fullUrl = `${ContactsUrls.BASE_URL}${ContactsUrls.GET_CONTACTS_URL}`

    const result = await RequestSender.post(fullUrl, search)

    return result.json()
}

export const getContactsBirthday = async () => {

    const fullUrl = `${ContactsUrls.BASE_URL}${ContactsUrls.GET_CONTACTS_URL}`

    const result = await RequestSender.post(fullUrl, {})

    return result.json()
}