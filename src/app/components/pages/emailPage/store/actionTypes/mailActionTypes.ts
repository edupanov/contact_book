export interface MailStateInterface {
    isDeleteLoading: boolean
    errors: object
}

export enum MailActionTypes {
    SEND_MAIL= '[Send mail] Send mail',
    SEND_MAIL_SUCCESS = '[Send mail] Send mail Success',
    SEND_MAIL_FAILURE = '[Send mail] Send mail Failure',
}

interface sendMail {
    type: MailActionTypes.SEND_MAIL,
}

interface sendMailSuccess {
    type: MailActionTypes.SEND_MAIL_SUCCESS,
}

interface sendMailFailure {
    type: MailActionTypes.SEND_MAIL_FAILURE,
    errors: {}
}

export type MailActionType = sendMail | sendMailSuccess | sendMailFailure
