import {MailActionType, MailActionTypes, MailStateInterface} from "../actionTypes/mailActionTypes";

const initialState: MailStateInterface = {
    isDeleteLoading: false,
    errors: {}
}

export const sendMailReducer = (state: MailStateInterface = initialState, action: MailActionType): MailStateInterface => {
    switch (action.type) {
        case MailActionTypes.SEND_MAIL:
            return {
                ...state,
                isDeleteLoading: true
            }
        case MailActionTypes.SEND_MAIL_SUCCESS:
            return {
                ...state,
                isDeleteLoading: false
            }
        case MailActionTypes.SEND_MAIL_FAILURE:
            return {
                ...state,
                isDeleteLoading: false,
                errors: {}
            }

        default:
            return state
    }
}
