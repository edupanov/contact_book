import {
    AttachmentActionTypes,
    AttachmentsActionType,
    AttachmentsStateInterface
} from "../actionTypes/attachmentsActionTypes";

const initialState: AttachmentsStateInterface = {
    attachments: [],
}

export const attachmentsReducer = (state: AttachmentsStateInterface = initialState, action: AttachmentsActionType): AttachmentsStateInterface => {
    switch (action.type) {
        case AttachmentActionTypes.EDIT_ATTACHMENTS:
            return {
                ...state,
                attachments: action.payload,
            }
        default:
            return state
    }
}
