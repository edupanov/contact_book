import {Dispatch} from "redux";
import {LoginActionType, LoginActionTypes} from "../ActionTypes/loginActionTypes";
import {RootState} from "../../../../../../store/rootReducer";
import * as LoginRequests from '../requests/loginRequests'


export const getLogin = (email: string, password: string) =>
    async (dispatch: Dispatch<LoginActionType>, getState: () => RootState) => {
        dispatch({type: LoginActionTypes.GET_LOGIN})


        await LoginRequests.login(email, password)
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