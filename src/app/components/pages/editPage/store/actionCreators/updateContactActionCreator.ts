import {Dispatch} from "redux";
import {ContactsActionType} from "../../../../contactList/store/actionTypes/contactListActiontypes";
import {RootState} from "../../../../../store/rootReducer";
import * as EditRequest from "../requests/updateContactRequests";
import {ContactInterface} from "../../../../contactList/types/contact.interface";
import {UpdateContactActionType, UpdateContactActionTypes} from "../actionType/updateContactActionTypes";
import {CallHistoryMethodAction, push} from "connected-react-router";
import {PATH} from "../../../../../routes/Routes";


export const updateContact = (contact: { contact: ContactInterface }) =>
    async (dispatch: Dispatch<UpdateContactActionType | ContactsActionType | CallHistoryMethodAction>, getState: () => RootState) => {
        dispatch({type: UpdateContactActionTypes.UPDATE_CONTACT})
        await EditRequest.updateContact(contact)
            .then(async response => {
                if (response.isSuccess) {
                    dispatch(push(PATH.HOME))
                }
            })
            .catch(error => {
                dispatch({type: UpdateContactActionTypes.UPDATE_CONTACT_FAILURE, errors: error})
            })
    }
