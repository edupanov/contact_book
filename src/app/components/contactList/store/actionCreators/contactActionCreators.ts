import {Dispatch} from "redux";
import {ContactActionTypes, ContactsActionType} from "../actionTypes/contactListActiontypes";
import {RootState} from "../../../../store/rootReducer";
import {DefaultPagedResponse} from "../../../../shared/types/defaultPagedResponse";
import {ContactInterface} from "../../types/contact.interface";
import * as ContactListRequests from '../../requests/contactListRequests'

export const getContacts = (pageSize: string = '3', currentPage: string = '1') => // передаем то что хотим поменять
    async (dispatch: Dispatch<ContactsActionType>, getState: () => RootState) => { // передаем наш диспатч
        dispatch({type: ContactActionTypes.GET_CONTACTS}) // запускаем крутилку

        const {searchParams} = getState().search  //получаем парметры из текущего стейта
        const {take, page} = getState().contacts

        const search = {
            ...searchParams,
            page, take
        }

        await ContactListRequests.getContact(search)
            .then(async (response: DefaultPagedResponse<Array<ContactInterface>>) => {
                if (response.isSuccess) {
                    dispatch({
                        type: ContactActionTypes.GET_CONTACTS_SUCCESS,
                        payload: {
                            users: response?.data as Array<ContactInterface>,
                            maxUsers: response?.maxUsers
                        }
                    })
                }
            })
            .catch(error => {
                dispatch({type: ContactActionTypes.GET_CONTACTS_FAILURE, errors: error})
            })
    }

export const setPage = (page: number) => (dispatch: Dispatch<ContactsActionType>) => {
    dispatch({type: ContactActionTypes.SET_CONTACTS_PAGE, page})
}

export const setTake = (take: number) => (dispatch: Dispatch<ContactsActionType>) => {
    dispatch({type: ContactActionTypes.SET_CONTACTS_TAKE, take})
}
