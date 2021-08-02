import {ContactsUrls} from "../../../../../../urls/contactsUrls";
import {RequestSender} from "../../../../../shared/services/requestSenderService/requestSender";
import {AttachmentInterface} from "../../../../contactList/types/contact.interface";

export const getAttachments = async (attachments: AttachmentInterface[], comment: string) => {
    const BASE_URL = "http://localhost:8080/api"

    // const fullUrl = `${BASE_URL}${ContactsUrls.}`
    //
    // const result = await RequestSender.post(fullUrl, {attachments, comment})

    // return result.json()
}