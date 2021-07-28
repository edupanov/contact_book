import {ContactsUrls} from "../../../../../urls/contactsUrls";
import {RequestSender} from "../../../../shared/services/requestSenderService/requestSender";
import {GridRowId} from "@material-ui/data-grid";

export const deleteContact = async (deletedContacts:GridRowId[]) => {

    const fullUrl = `${ContactsUrls.BASE_URL}${ContactsUrls.DELETE_CONTACTS_URL}`

    const result = await RequestSender.post(fullUrl, {deletedContacts})

    return result.json()
}

export const deleteAllContact = async () => {

    const fullUrl = `${ContactsUrls.BASE_URL}${ContactsUrls.DELETE_ALL_CONTACTS_URL}`

    const result = await RequestSender.delete(fullUrl, {})

    return result.json()
}