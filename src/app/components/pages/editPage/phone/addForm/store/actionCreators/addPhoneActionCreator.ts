import {Dispatch} from "redux";
import * as PhoneRequests from "../../requests/addPhoneRequests";
import {CreatePhoneActionType, CreatePhoneActionTypes} from "../actionType/addPhoneActionTypes";
import {
    ContactActionTypes,
    ContactsActionType
} from "../../../../../../contactList/store/actionTypes/contactListActiontypes";
import {RootState} from "../../../../../../../store/rootReducer";
import * as ContactListRequests from "../../../../../../contactList/requests/contactListRequests";
import {ContactInterface, PhoneInterface} from "../../../../../../contactList/types/contact.interface";
import {CallHistoryMethodAction} from "connected-react-router";


export const addPhone = (phone: PhoneInterface, contactId: string) =>
    async (dispatch: Dispatch<CreatePhoneActionType | ContactsActionType | CallHistoryMethodAction>, getState: () => RootState) => {

        dispatch({type: CreatePhoneActionTypes.CREATE_PHONE})

        await PhoneRequests.addPhone(phone, contactId)
            .then(async response => {

                const {searchParams} = getState().search  //получаем парметры из текущего стейта
                const {take, page} = getState().contacts

                const search = {
                    ...searchParams,
                    page, take
                }

                if (response.isSuccess) {
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
            .catch(error => {
                dispatch({type: CreatePhoneActionTypes.CREATE_PHONE_FAILURE, errors: error})
            })


    }
