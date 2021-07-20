import {Dispatch} from "redux";
import {ContactActionTypes, ContactsActionType} from "../../../../contactList/store/actionTypes/contactListActiontypes";
import {RootState} from "../../../../../store/rootReducer";
import * as ContactListRequests from "../../../../contactList/requests/contactListRequests";
import * as ContactRequests from "../../../../../components/pages/deleteModal/requests/deleteContactRequests";
import {ContactInterface} from "../../../../contactList/types/contact.interface";
import {DeleteContactActionType, DeleteContactActionTypes} from "../actionType/deleteContactActionTypes";
import {GridRowId} from "@material-ui/data-grid";


export const deleteContacts = (deletedContacts: Array<string> | GridRowId[]) =>
    async (dispatch: Dispatch<DeleteContactActionType | ContactsActionType>, getState: () => RootState) => {

        dispatch({type: DeleteContactActionTypes.DELETE_CONTACT})

        await ContactRequests.deleteContact(deletedContacts)
            .then(async response => {
                const updatedContacts = await ContactListRequests.getContact({})
                dispatch({
                    type: ContactActionTypes.GET_CONTACTS_SUCCESS,
                    payload: {
                        users: updatedContacts?.data as Array<ContactInterface>,
                        maxUsers: response?.maxUsers
                    }
                })

            })
            .catch(error => {
                dispatch({type: DeleteContactActionTypes.DELETE_CONTACT_FAILURE, errors: error})
            })
    }
