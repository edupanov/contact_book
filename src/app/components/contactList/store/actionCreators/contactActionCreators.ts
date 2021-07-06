import {Dispatch} from "redux";
import {ContactActionTypes, ContactsActionType} from "../actionTypes/actiontypes";
import {RequestSender} from "../../../../shared/services/requestSenderService/requestSender";
import {ContactsUrls} from "../../../../../urls/contactsUrls";
import {RootState} from "../../../../store/rootReducer";
import {DefaultPagedResponse} from "../../../../shared/types/defaultPagedResponse";
import {ContactInterface} from "../../types/contact.interface";

export const getContacts = (pageSize: string = '3', currentPage: string = '1') =>
    async (dispatch: Dispatch<ContactsActionType>, getState: () => RootState) => {
        dispatch({type: ContactActionTypes.GET_CONTACTS})

        const BASE_URL = "http://localhost:8080/api"

        const fullUrl = `${BASE_URL}${ContactsUrls.GET_CONTACTS_URL}/page/${currentPage}/take/${pageSize}`

        await RequestSender.get<DefaultPagedResponse<Array<ContactInterface>>>(fullUrl)
            .then(async response => {
                const result = await response.json()
                if (result.isSuccess) {
                    dispatch({
                        type: ContactActionTypes.GET_CONTACTS_SUCCESS,
                        payload: {
                            users: result?.data as Array<ContactInterface>,
                            maxUsers: result?.maxUsers
                        }
                    })
                }
            })
            .catch(error => {
                dispatch({type: ContactActionTypes.GET_CONTACTS_FAILURE, errors: error})
            })
    }