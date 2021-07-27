import {ContactsUrls} from "../../../../../../../urls/contactsUrls";
import {RequestSender} from "../../../../../../shared/services/requestSenderService/requestSender";
import {PhoneInterface} from "../../../../../contactList/types/contact.interface";

export const addPhone = async (phone: PhoneInterface , contactId: string) => {

    const fullUrl = `${ContactsUrls.BASE_URL}${ContactsUrls.ADD_NEW_PHONE}`

    const result = await RequestSender.post(fullUrl, {phone, contactId})

    return result.json()
}