import {Dispatch} from "redux";
import * as AvatarRequest from "../requests/avatarRequests";
import {AvatarActionType, AvatarActionTypes} from "../actionsTypes/avatarActionTypes";
import {
    ContactActionTypes,
    ContactsActionType
} from "../../../../../contactList/store/actionTypes/contactListActiontypes";
import {RootState} from "../../../../../../store/rootReducer";
import * as ContactListRequests from "../../../../../contactList/requests/contactListRequests";
import {ContactInterface} from "../../../../../contactList/types/contact.interface";


export const saveAvatar = (file: string, name: string) =>
    async (dispatch: Dispatch<AvatarActionType | ContactsActionType>, getState: () => RootState) => {

        dispatch({type: AvatarActionTypes.GET_AVATAR})

        await AvatarRequest.saveAvatar(file, name)
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
                dispatch({type: AvatarActionTypes.GET_AVATAR_FAILURE, errors: error})
            })
    }
