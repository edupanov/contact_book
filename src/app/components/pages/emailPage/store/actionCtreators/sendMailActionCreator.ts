import {Dispatch} from "redux";

import * as SendMailRequest from '../../requests/emailRequests'
import {RootState} from "../../../../../store/rootReducer";
import {MailActionType, MailActionTypes} from "../actionTypes/mailActionTypes";
import {CallHistoryMethodAction, push} from "connected-react-router";
import {PATH} from "../../../../../routes/Routes";

export const sendMail = (emails: Array<string>, theme: string, text: string) =>
    async (dispatch: Dispatch<MailActionType | CallHistoryMethodAction>, getState: () => RootState) => {
        dispatch({type: MailActionTypes.SEND_MAIL})

        await SendMailRequest.sendMail(emails, theme, text)
            .then(async response => {
                if (response.isSuccess) {
                    dispatch(push(PATH.HOME))
                }
            })
            .catch(error=> {dispatch({type: MailActionTypes.SEND_MAIL_FAILURE, errors: error})})
    }

