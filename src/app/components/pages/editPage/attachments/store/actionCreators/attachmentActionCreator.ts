import {AttachmentInterface, ContactInterface} from "../../../../../contactList/types/contact.interface";
import {Dispatch} from "redux";
import {AttachmentsActionType} from "../actionTypes/attachmentsActionTypes";
import {RootState} from "../../../../../../store/rootReducer";
import {
    ContactActionTypes,
    ContactsActionType
} from "../../../../../contactList/store/actionTypes/contactListActiontypes";

export const addAttachment = (newAttachment: AttachmentInterface, contactId: string) =>
    async (dispatch: Dispatch<ContactsActionType | AttachmentsActionType>, getState: () => RootState) => {
        dispatch({type: ContactActionTypes.GET_CONTACTS})

        const {data, maxUsers} = getState().contacts

        const updatedContacts = data.map((contact: ContactInterface) => {
            const copyContact = JSON.parse(JSON.stringify(contact))

            if (copyContact.id === contactId) {
                if (copyContact.attachments && copyContact.attachments.length > 0) {
                    copyContact.attachments.push(newAttachment)
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

export const updateAttachment = (attachment: AttachmentInterface, contactId: string, attachmentId: string) =>
    async (dispatch: Dispatch<ContactsActionType | AttachmentsActionType>, getState: () => RootState) => {
        dispatch({type: ContactActionTypes.GET_CONTACTS})

        const {data, maxUsers} = getState().contacts

        const updatedContact = data.find((contact: ContactInterface) => contact.id === contactId)
        const updateAttachments = updatedContact.attachments.map((item: AttachmentInterface) => item.id === attachmentId ? attachment : item)

        // dispatch({
        //     type: ContactActionTypes.GET_CONTACTS_SUCCESS,
        //     payload: {
        //         users: updatedContacts as Array<ContactInterface>,
        //         maxUsers: maxUsers
        //     }
        // })
    }

export const deleteAttachment = (contactId: string, attachmentId: string) =>
    async (dispatch: Dispatch<ContactsActionType | AttachmentsActionType>, getState: () => RootState) => {
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
