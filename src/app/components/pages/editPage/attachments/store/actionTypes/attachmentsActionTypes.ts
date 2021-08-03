import {AttachmentInterface} from "../../../../../contactList/types/contact.interface";

export interface AttachmentsStateInterface {
    attachments: Array<AttachmentInterface>
}

export enum AttachmentActionTypes {
    EDIT_ATTACHMENTS = '[Attachment List] Get Attachments',
}

interface editAttachments {
    type: AttachmentActionTypes.EDIT_ATTACHMENTS
    payload: Array<AttachmentInterface>
}



export type AttachmentsActionType = editAttachments
