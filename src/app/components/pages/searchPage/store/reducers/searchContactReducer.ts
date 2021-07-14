import {
    SearchPageActionType,
    SearchContactActionTypes,
    SearchUserStateInterface
} from "../actionTypes/searchContactActionTypes";
import {SearchParamsInterface} from "../../types/searcParams.interface";

const initialState: SearchUserStateInterface = {
    searchParams: {} as SearchParamsInterface
}

export const searchContactReducer = (state: SearchUserStateInterface = initialState, action: SearchPageActionType): SearchUserStateInterface => {
    switch (action.type) {
        case SearchContactActionTypes.SET_SEARCH_PARAMS:
            return {
                ...state,
                searchParams: action.payload
            }

        default:
            return state
    }
}