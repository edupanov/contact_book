import {
    AttachmentActionTypes,
    AttachmentsActionType,
    AttachmentsStateInterface
} from "../actionTypes/attachmentsActionTypes";

const initialState: AttachmentsStateInterface = {
    isLoading: false,
    errors: {}
}

export const attachmentsReducer = (state: AttachmentsStateInterface = initialState, action: AttachmentsActionType): AttachmentsStateInterface => {
    switch (action.type) {
        case AttachmentActionTypes.ADD_ATTACHMENTS:
            return {
                ...state,
                isLoading: false
            }
        case AttachmentActionTypes.UPDATE_ATTACHMENTS_FAILURE:
            return {
                ...state, errors: {}
            }
        default:
            return state
    }
}
