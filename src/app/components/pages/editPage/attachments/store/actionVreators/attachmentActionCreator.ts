import { Dispatch } from "redux";
import {AttachmentActionTypes, AttachmentsActionType} from "../actionTypes/attachmentsActionTypes";
import {RootState} from "../../../../../../store/rootReducer";
import {AttachmentInterface} from "../../../../../contactList/types/contact.interface";


export const saveAttachment = (newAttachments: Array<AttachmentInterface>) =>
    (dispatch: Dispatch<AttachmentsActionType>, getState: () => RootState) => {
        dispatch({type: AttachmentActionTypes.EDIT_ATTACHMENTS, payload: newAttachments})


    }
