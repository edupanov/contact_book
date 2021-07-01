import {Dispatch} from "redux";
import {ContactActionTypes} from "../actionTypes/actiontypes";
import {RequestSender} from "../../../../shared/services/requestSenderService/requestSender";
import {ContactsUrls} from "../../../../../urls/contactsUrls";

export const getContacts = async (pageSize: number, currentPage: number) =>
    (dispatch: Dispatch<any>, getState: any) => {

        dispatch(ContactActionTypes.GET_CONTACTS)

        const fullUrl = 'localhost:8080' + ContactsUrls.GET_CONTACTS_URL

        return RequestSender.get(fullUrl)
            .then(response => {

                dispatch(ContactActionTypes.GET_CONTACTS_SUCCESS)
            })
            .catch(error => {
                dispatch(ContactActionTypes.GET_CONTACTS_FAILURE)
            })
    }