import {Dispatch} from "redux";
import {LoginActionType, LoginActionTypes} from "../ActionTypes/loginActionTypes";
import {RootState} from "../../../../../../store/rootReducer";
import * as LoginRequests from '../requests/loginRequests'
import {CallHistoryMethodAction} from "connected-react-router";


export const getLogin = (email: string, password: string) =>
    async (dispatch: Dispatch<LoginActionType | CallHistoryMethodAction>, getState: () => RootState) => {
        dispatch({type: LoginActionTypes.GET_LOGIN})

        await LoginRequests.login(email, password)
            .then(response => {
                if (response.user.length > 0) {
                    dispatch({type: LoginActionTypes.GET_LOGIN_SUCCESS, payload: response.user})
                }
            })
            .catch(error => {
                dispatch({type: LoginActionTypes.GET_LOGIN_FAILURE, errors: error})
            })
    }

export const logOut = () =>
    async (dispatch: Dispatch<LoginActionType | CallHistoryMethodAction>, getState: () => RootState) => {
       dispatch({type: LoginActionTypes.LOGOUT_SUCCESS})

    }

