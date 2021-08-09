import {ContactsUrls} from "../../../../../../../urls/contactsUrls";
import {RequestSender} from "../../../../../../shared/services/requestSenderService/requestSender";

export const saveAvatar = async (file: string, name: string) => {

    const fullUrl = `${ContactsUrls.BASE_URL}${ContactsUrls.UPDATE_CONTACTS_URL}`

    const result = await RequestSender.put(fullUrl, {file, name})

    return result.json()
}



