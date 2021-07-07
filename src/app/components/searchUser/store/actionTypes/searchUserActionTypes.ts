import {SearchParamsInterface} from "../../../contactList/types/searcParams.interface";

export interface SearchUserStateInterface {
    searchParams: SearchParamsInterface
}

export enum SearchUserActionTypes {
    SET_SEARCH_PARAMS = '[Search panel] Set Search Params',
}

interface setSearchParams {
    type: SearchUserActionTypes.SET_SEARCH_PARAMS,
    payload: SearchParamsInterface
}

export type SearchPageActionType = setSearchParams