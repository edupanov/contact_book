import {AttachmentInterface, ContactInterface} from "../../../../../contactList/types/contact.interface";
import {Dispatch} from "redux";
import {RootState} from "../../../../../../store/rootReducer";
import {
    ContactActionTypes,
    ContactsActionType
} from "../../../../../contactList/store/actionTypes/contactListActiontypes";
import {formatDate} from "../../../../../../utils/utils";

export const addAttachment = (newAttachment: AttachmentInterface, contactId: string) =>
    async (dispatch: Dispatch<ContactsActionType>, getState: () => RootState) => {
        dispatch({type: ContactActionTypes.GET_CONTACTS})

        const {data, maxUsers} = getState().contacts

        const updatedContacts = data.map((contact: ContactInterface) => {
            const copyContact = JSON.parse(JSON.stringify(contact))
            let date: any = new Date();
            const today = formatDate(date, 'DD.MM.yyyy')

            if (copyContact.id === contactId) {
                if (copyContact.attachments && copyContact.attachments.length > 0) {
                    copyContact.attachments.push({...newAttachment, uploadDate: today})
                } else {
                    copyContact.attachments = [newAttachment]
                }
                return copyContact
            }
            return contact
        })

        dispatch({
            type: ContactActionTypes.GET_CONTACTS_SUCCESS,
            payload: {
                users: updatedContacts as Array<ContactInterface>,
                maxUsers: maxUsers
            }
        })
    }

export const editAttachment = (updateAttachment: AttachmentInterface, contactId: string) =>
    async (dispatch: Dispatch<ContactsActionType>, getState: () => RootState) => {
        dispatch({type: ContactActionTypes.GET_CONTACTS})

        const {data, maxUsers} = getState().contacts

        const updatedContacts = data.map((contact: ContactInterface) => {
            const copyContact = JSON.parse(JSON.stringify(contact))

            if (copyContact.id === contactId) {
                const updateAttachments = copyContact.attachments.map((attachment: AttachmentInterface) => {
                    if (attachment.id === updateAttachment.id) {
                        return updateAttachment;
                    }
                    return attachment;
                });
                return {...copyContact, attachments: updateAttachments}
            }
            return contact
        })

        dispatch({
            type: ContactActionTypes.GET_CONTACTS_SUCCESS,
            payload: {
                users: updatedContacts as Array<ContactInterface>,
                maxUsers: maxUsers
            }
        })
    }







export const deleteAttachment = (contactId: string, attachmentId: string) =>
    async (dispatch: Dispatch<ContactsActionType>, getState: () => RootState) => {
        dispatch({type: ContactActionTypes.GET_CONTACTS})

        const {data, maxUsers} = getState().contacts

        const updatedContacts = data.map((contact: ContactInterface) => {
            const copyContact = JSON.parse(JSON.stringify(contact))

            if (copyContact.id === contactId) {
                copyContact.attachments = copyContact.attachments.filter((item: AttachmentInterface) => item.id !== attachmentId)
                return copyContact
            }
            return contact
        })

        dispatch({
            type: ContactActionTypes.GET_CONTACTS_SUCCESS,
            payload: {
                users: updatedContacts as Array<ContactInterface>,
                maxUsers: maxUsers
            }
        })
    }
