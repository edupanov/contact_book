import {AttachmentInterface} from "../../../../../contactList/types/contact.interface";

export interface AttachmentsStateInterface {
    isLoading: boolean
    errors: object
}

export enum AttachmentActionTypes {
    UPDATE_ATTACHMENTS = '[Update Attachment] Update Attachments',
    ADD_ATTACHMENTS = '[Add Attachment] Add Attachments',
    UPDATE_ATTACHMENTS_FAILURE = '[Update Attachment Failure] Update Attachments Failure'
}

interface updateAttachments {
    type: AttachmentActionTypes.UPDATE_ATTACHMENTS
    payload:{
        attachments: Array<AttachmentInterface>
        attachmentId: string
    }

}

interface addAttachments {
    type: AttachmentActionTypes.ADD_ATTACHMENTS
}

interface updateAttachmentsFailure {
    type: AttachmentActionTypes.UPDATE_ATTACHMENTS_FAILURE,
    errors: {}
}


export type AttachmentsActionType = updateAttachments | addAttachments | updateAttachmentsFailure
