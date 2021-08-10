import {Dispatch} from "redux";
import {ContactActionTypes, ContactsActionType} from "../actionTypes/contactListActiontypes";
import {RootState} from "../../../../store/rootReducer";
import {DefaultPagedResponse} from "../../../../shared/types/defaultPagedResponse";
import {ContactInterface} from "../../types/contact.interface";
import * as ContactListRequests from '../../requests/contactListRequests'
import {LoginActionType} from "../../../pages/mainPage/loginForm/store/ActionTypes/loginActionTypes";
import * as SendMailRequest from "../../../pages/emailPage/requests/emailRequests";
import {CallHistoryMethodAction} from "connected-react-router";
import {MailActionType, MailActionTypes} from "../../../pages/emailPage/store/actionTypes/mailActionTypes";
import {formatDate} from "../../../../utils/utils";

export const getContacts = () => // передаем то что хотим поменять
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

export const getContactsBirthday = () =>
    async (dispatch: Dispatch<ContactsActionType | LoginActionType | MailActionType | CallHistoryMethodAction>, getState: () => RootState) => { // передаем наш диспатч
        dispatch({type: ContactActionTypes.GET_CONTACTS})

        await ContactListRequests.getContactsBirthday()
            .then(async (response: DefaultPagedResponse<Array<ContactInterface>>) => {

                if (response.isSuccess) {
                    const contacts = response?.data as Array<ContactInterface>
                    let date: any = new Date();
                    const today = formatDate(date, 'DD.MM.yyyy')
                    const testContact = '01.01.2054'
                    const contactsBirthDay = contacts.filter((el: any) => el.birthDate === testContact)
                    const contactNameBirthday = contactsBirthDay.map((el: any) => `${el.name} ${el.surname}`).join(', ')


                    await SendMailRequest.sendMail(['edupanov@gmail.com'], 'Напоминание', `Сегодня День рождения у ${contactNameBirthday}`)
                        .then(async response => {
                            if (response.isSuccess) {
                                dispatch({type: MailActionTypes.SEND_MAIL_SUCCESS})
                            }
                        })
                        .catch(error => {
                            dispatch({type: MailActionTypes.SEND_MAIL_FAILURE, errors: error})
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
