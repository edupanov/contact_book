import {Dispatch} from "redux";
import {LoginActionType, LoginActionTypes} from "../ActionTypes/loginActionTypes";
import {RootState} from "../../../../../store/rootReducer";
import {ContactsUrls} from "../../../../../../urls/contactsUrls";
import {RequestSender} from "../../../../../shared/services/requestSenderService/requestSender";
import {DefaultPagedResponse} from "../../../../../shared/types/defaultPagedResponse";
import {LoginInterface} from "../../types/login.interface";


export const getLogin = (email: string, password: string) =>
    async (dispatch: Dispatch<LoginActionType>, getState: () => RootState) => {
        dispatch({type: LoginActionTypes.GET_LOGIN})

        const baseUrl = 'localhost:8080/api'
        const fullUrl = baseUrl + ContactsUrls.GET_LOGIN_URL

        await RequestSender.post<DefaultPagedResponse<LoginInterface>>(fullUrl, {email, password})
            .then(async response => {
                const result = await response.json()
                if (result.isSuccess) {
                    dispatch({type: LoginActionTypes.GET_LOGIN_SUCCESS, payload: result.data!})
                }
            })
            .catch(error => {
                dispatch({type: LoginActionTypes.GET_LOGIN_FAILURE, errors: error})
            })
    }