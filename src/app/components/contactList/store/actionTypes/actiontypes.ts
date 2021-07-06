import {ContactInterface} from "../../types/contact.interface";

export interface ContactListStateInterface {
    isLoading: boolean
    errors: object
    maxUsers: number
    data: Array<ContactInterface> | null
}

export enum ContactActionTypes {
    GET_CONTACTS = '[Contact List] Get Contacts',
    GET_CONTACTS_SUCCESS = '[Contact List] Get Contacts Success',
    GET_CONTACTS_FAILURE = '[Contact List] Get Contacts Failure',
    SET_CONTACTS_PAGE = '[Contact List] Set Page Contacts'
}

interface getContacts {
    type: ContactActionTypes.GET_CONTACTS
}

interface getContactsSuccess {
    type: ContactActionTypes.GET_CONTACTS_SUCCESS,
    payload: {
        users: Array<ContactInterface>,
        maxUsers: number
    }
}

interface getContactsFailure {
    type: ContactActionTypes.GET_CONTACTS_FAILURE,
    errors: {}
}

interface setContactPage {
    type: ContactActionTypes.SET_CONTACTS_PAGE,
    payload: number
}

export type ContactsActionType = getContacts | getContactsSuccess | getContactsFailure | setContactPage