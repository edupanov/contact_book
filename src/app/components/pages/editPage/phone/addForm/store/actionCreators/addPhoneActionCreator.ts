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


export const addPhone = (phone: PhoneInterface , contactId: string) =>
    async (dispatch: Dispatch<CreatePhoneActionType | ContactsActionType>, getState: () => RootState) => {
        dispatch({type: CreatePhoneActionTypes.CREATE_PHONE})
        await PhoneRequests.addPhone(phone, contactId)
            .then(async response => {

                if (response.isSuccess) {

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
                dispatch({type: CreatePhoneActionTypes.CREATE_PHONE_FAILURE, errors: error})
            })


    }