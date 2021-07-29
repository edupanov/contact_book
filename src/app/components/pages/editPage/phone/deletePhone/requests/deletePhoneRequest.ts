import {ContactsUrls} from "../../../../../../../urls/contactsUrls";
import {RequestSender} from "../../../../../../shared/services/requestSenderService/requestSender";

export const deletePhone = async (contactId: string, phoneId: string) => {

    const fullUrl = `${ContactsUrls.BASE_URL}${ContactsUrls.DELETE_PHONE_URL}`

    const result = await RequestSender.post(fullUrl, {contactId, phoneId})

    return result.json()
}