import {Dispatch} from "redux";
import {DeletePhoneActionType, DeletePhoneActionTypes} from "../actionTypes/deletePhoneActionTypes";
import {
    ContactActionTypes,
    ContactsActionType
} from "../../../../../../contactList/store/actionTypes/contactListActiontypes";
import {RootState} from "../../../../../../../store/rootReducer";
import * as PhoneRequest from '../../requests/deletePhoneRequest'
import * as ContactListRequests from "../../../../../../contactList/requests/contactListRequests";
import {ContactInterface} from "../../../../../../contactList/types/contact.interface";

export const deletePhone = (contactId: string, phoneId: string) =>
    async (dispatch: Dispatch<DeletePhoneActionType | ContactsActionType>, getState: () => RootState) => {
        dispatch({type: DeletePhoneActionTypes.DELETE_PHONE})

        await PhoneRequest.deletePhone(contactId, phoneId)
            .then(async response => {

                const {searchParams} = getState().search  //получаем парметры из текущего стейта
                const {take, page} = getState().contacts

                const search = {
                    ...searchParams,
                    page, take
                }
                if(response.isSuccess){
                    const updatedContacts = await ContactListRequests.getContact(search)
                    dispatch({
                        type: ContactActionTypes.GET_CONTACTS_SUCCESS,
                        payload: {
                            users: updatedContacts?.data as Array<ContactInterface>,
                            maxUsers: response?.maxUsers
                        }
                    })
                }
            })
            .catch(error=> {dispatch({type: DeletePhoneActionTypes.DELETE_PHONE_FAILURE, errors: error})})
    }