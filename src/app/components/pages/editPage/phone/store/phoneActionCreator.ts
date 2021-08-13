import {Dispatch} from "redux";
import {ContactActionTypes, ContactsActionType} from "../../../../contactList/store/actionTypes/contactListActiontypes";
import {RootState} from "../../../../../store/rootReducer";
import {AttachmentInterface, ContactInterface, PhoneInterface} from "../../../../contactList/types/contact.interface";


export const addPhone = (phone: PhoneInterface, contactId: string) =>
    async (dispatch: Dispatch<ContactsActionType>, getState: () => RootState) => {
        dispatch({type: ContactActionTypes.GET_CONTACTS})

        const {data, maxUsers} = getState().contacts

        const updatedContacts = data.map((contact: ContactInterface) => {
            const copyContact = JSON.parse(JSON.stringify(contact))

            if (copyContact.id === contactId) {
                if (copyContact.phones && copyContact.phones.length > 0) {
                    copyContact.phones.push(phone)
                } else {
                    copyContact.phones = [phone]
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

export const editPhone = (updatePhone: PhoneInterface, contactId: string) =>
    async (dispatch: Dispatch<ContactsActionType>, getState: () => RootState) => {
        dispatch({type: ContactActionTypes.GET_CONTACTS})

        const {data, maxUsers} = getState().contacts

        const updatedContacts = data.map((contact: ContactInterface) => {
            const copyContact = JSON.parse(JSON.stringify(contact))

            if (copyContact.id === contactId) {
                const phones = copyContact.phones.map((phone: PhoneInterface) => {
                    if (phone.id === updatePhone.id) {
                        return updatePhone;
                    }
                    return phone;
                });
                return {...copyContact, phones: phones}
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

export const deletePhone = (contactId: string, phoneId: string) =>
    async (dispatch: Dispatch<ContactsActionType>, getState: () => RootState) => {
        dispatch({type: ContactActionTypes.GET_CONTACTS})

        const {data, maxUsers} = getState().contacts

        const updatedContacts = data.map((contact: ContactInterface) => {
            const copyContact = JSON.parse(JSON.stringify(contact))

            if (copyContact.id === contactId) {
                copyContact.phones = copyContact.phones.filter((item: PhoneInterface) => item.id !== phoneId)
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