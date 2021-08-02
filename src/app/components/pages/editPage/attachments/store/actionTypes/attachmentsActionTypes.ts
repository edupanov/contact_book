import {AttachmentInterface} from "../../../../../contactList/types/contact.interface";

export interface AttachmentsStateInterface {
    isLoading: boolean
    errors: object
    data: Array<AttachmentInterface> | null
}

export enum AttachmentActionTypes {
    GET_ATTACHMENTS = '[Attachment List] Get Attachments',
    GET_ATTACHMENTS_SUCCESS = '[Attachment List] Get Attachments Success',
    GET_ATTACHMENTS_FAILURE = '[Attachment List] Get Attachments Failure',
}

interface getAttachments {
    type: AttachmentActionTypes.GET_ATTACHMENTS
}

interface getAttachmentsSuccess {
    type: AttachmentActionTypes.GET_ATTACHMENTS_SUCCESS,
    payload: {
        attachments: Array<AttachmentInterface>,
    }
}

interface getAttachmentsFailure {
    type: AttachmentActionTypes.GET_ATTACHMENTS_FAILURE,
    errors: {}
}


export type AttachmentsActionType = getAttachments | getAttachmentsSuccess | getAttachmentsFailure