import {Dispatch} from "redux";
import {CreateUserActionType, CreateUserActionTypes} from "../actionType/editContactActionTypes";
import {EditContactInterface} from "../../types/editContact.interface";
import {RootState} from "../../../../../store/rootReducer";
import * as ContactRequests from '../../requests/contactRequests'
import * as ContactListRequests from '../../../../contactList/requests/contactListRequests'
import {ContactActionTypes, ContactsActionType} from "../../../../contactList/store/actionTypes/contactListActiontypes";
import {ContactInterface} from "../../../../contactList/types/contact.interface";


export const addContact = (contact: EditContactInterface) =>
    async (dispatch: Dispatch<CreateUserActionType | ContactsActionType>, getState: () => RootState) => {
        dispatch({type: CreateUserActionTypes.SET_USER})

        // await ContactRequests.addContact(contact) // вынесли логику в файл contactListRequest, для переиспользования
        //     .then(async response => {
        //         if (response.isSuccess) {
        //             const {searchParams} = getState().search  //получаем парметры из текущего стейта
        //             const {take, page} = getState().contacts
        //
        //             const search = {
        //                 ...searchParams,
        //                 page, take
        //             }
        //             await ContactListRequests.getContact(search)
        //                 .then(response => {
        //                     dispatch({
        //                         type: ContactActionTypes.GET_CONTACTS_SUCCESS,
        //                         payload: {
        //                             users: response?.data as Array<ContactInterface>,
        //                             maxUsers: response?.totalItems
        //                         }
        //                     })
        //                 })
        //         }
        //     })
        //     .catch()

    }