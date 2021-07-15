import {Dispatch} from "redux";
import {ContactActionTypes, ContactsActionType} from "../../../../contactList/store/actionTypes/contactListActiontypes";
import {RootState} from "../../../../../store/rootReducer";
import * as ContactListRequests from "../../../../contactList/requests/contactListRequests";
import * as ContactRequests from "../../../../../components/pages/editPage/requests/updateContactRequests";
import {ContactInterface} from "../../../../contactList/types/contact.interface";
import {UpdateContactActionType, UpdateContactActionTypes} from "../actionType/updateContactActionTypes";


export const updateContact = (contact: {contact: ContactInterface}) =>
    async (dispatch: Dispatch<UpdateContactActionType | ContactsActionType>, getState: () => RootState) => {

        dispatch({type: UpdateContactActionTypes.UPDATE_CONTACT})

        await ContactRequests.updateContact(contact)
            .then( async response => {
                if(response.isSuccess) {
                    console.log('jkhh')
                    // const updatedContacts = await ContactListRequests.getContact({})
                    // dispatch({
                    //     type: ContactActionTypes.GET_CONTACTS,
                    //     payload: {
                    //         users: updatedContacts?.data as Array<ContactInterface>,
                    //         maxUsers: response?.maxUsers
                    //     }
                    // })
                }
            })
            .catch(error => {
                dispatch({type: UpdateContactActionTypes.UPDATE_CONTACT_FAILURE, errors: error})
            })
    }