import { connectRouter } from "connected-react-router";
import {History} from "history";
import {CombinedState, combineReducers} from "redux";
import {contactsReducer} from "../components/contactList/store/reducers/contactsReducer";
import {LoginReducer} from "../components/mainPage/loginForm/store/reducers/loginReducer";
import {searchUserReducer} from "../components/searchUser/store/reducers/searchUserReducer";

let rootState = {} as CombinedState<any>

export type RootState = ReturnType<typeof rootState>

export const createRootReducer = (history: History) => {
    rootState = combineReducers({
        router: connectRouter(history),
        contacts: contactsReducer,
        login: LoginReducer,
        search: searchUserReducer
    })

    return rootState
}