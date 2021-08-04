import {Dispatch} from "redux";
import {CreateContactActionType, CreateContactActionTypes} from "../actionType/addContactActionTypes";
import {ContactActionTypes, ContactsActionType} from "../../../../contactList/store/actionTypes/contactListActiontypes";
import {CreateContactInterface} from "../../types/createContactInterface";
import {RootState} from "../../../../../store/rootReducer";
import * as ContactRequests from "../../requests/addContactRequests";
import * as ContactListRequests from "../../../../contactList/requests/contactListRequests";
import {ContactInterface} from "../../../../contactList/types/contact.interface";
import {CallHistoryMethodAction} from "connected-react-router";


export const addContact = (contact: {contact: CreateContactInterface}) =>
    async (dispatch: Dispatch<CreateContactActionType | ContactsActionType | CallHistoryMethodAction>, getState: () => RootState) => {

        dispatch({type: CreateContactActionTypes.CREATE_CONTACT})

        await ContactRequests.addContact(contact)
            .then( async response => {
                if(response.isSuccess) {

                    const updatedContacts = await ContactListRequests.getContact({})
                    dispatch({
                        type: ContactActionTypes.GET_CONTACTS,
                        payload: {
                            users: updatedContacts?.data as Array<ContactInterface>,
                            maxUsers: response?.maxUsers
                        }
                    })
                }
            })
            .catch(error => {
                dispatch({type: CreateContactActionTypes.CREATE_CONTACT_FAILURE, errors: error})
            })


    }