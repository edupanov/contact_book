import {Dispatch} from "redux";
import {SearchPageActionType, SearchContactActionTypes} from "../actionTypes/searchContactActionTypes";
import {SearchParamsInterface} from "../../types/searcParams.interface";


export const setSearchParams = (searchParams: SearchParamsInterface) => (dispatch: Dispatch<SearchPageActionType>) => {
    dispatch({type: SearchContactActionTypes.SET_SEARCH_PARAMS, payload: searchParams})
}