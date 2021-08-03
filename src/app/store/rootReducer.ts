import {connectRouter} from "connected-react-router";
import {History} from "history";
import {CombinedState, combineReducers} from "redux";
import {contactsReducer} from "../components/contactList/store/reducers/contactsReducer";
import {LoginReducer} from "../components/pages/mainPage/loginForm/store/reducers/loginReducer";
import {searchContactReducer} from "../components/pages/searchPage/store/reducers/searchContactReducer";
import {createContactReducer} from "../components/pages/addPage/store/reducers/addContactReducer";
import {updateContactReducer} from "../components/pages/editPage/store/reducers/updateContactReducer";
import {deleteContactReducer} from "../components/pages/deleteModal/store/reducer/deleteContactReducer";
import {createPhoneReducer} from "../components/pages/editPage/phone/addForm/store/reducers/addPhoneReducer";
import {deletePhoneReducer} from "../components/pages/editPage/phone/deletePhone/store/reducers/deletePhoneReducer";
import {sendMailReducer} from "../components/pages/emailPage/store/reducers/sendMailReducer";
import {attachmentsReducer} from "../components/pages/editPage/attachments/store/reducers/attachmentsReducer";
import {avatarReducer} from "../components/pages/editPage/avatar/store/reducers/avatarReducer";

let rootState = {} as CombinedState<any>

export type RootState = ReturnType<typeof rootState>

export const createRootReducer = (history: History) => {
    rootState = combineReducers({
        router: connectRouter(history),
        contacts: contactsReducer,
        login: LoginReducer,
        search: searchContactReducer,
        createContact: createContactReducer,
        updateContact: updateContactReducer,
        delete: deleteContactReducer,
        addPhone: createPhoneReducer,
        deletePhone: deletePhoneReducer,
        sendMail: sendMailReducer,
        attachments: attachmentsReducer,
        avatar: avatarReducer

    })

    return rootState
}
