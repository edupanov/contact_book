import {Dispatch} from "redux";
import {
    ContactActionTypes,
    ContactsActionType
} from "../../../../../contactList/store/actionTypes/contactListActiontypes";
import {RootState} from "../../../../../../store/rootReducer";
import {ContactInterface} from "../../../../../contactList/types/contact.interface";


export const saveAvatar = (name: string, fileBAse64: string, contactId: string) =>
    async (dispatch: Dispatch<ContactsActionType>, getState: () => RootState) => {
        dispatch({type: ContactActionTypes.GET_CONTACTS})

        const {data, maxUsers} = getState().contacts

        const updatedContacts = data.map((contact: ContactInterface) => {
            const copyContact = JSON.parse(JSON.stringify(contact))

            if (copyContact.id === contactId) {
                if  (copyContact.id === contactId){
                    copyContact.logo = {name: name, file: fileBAse64}
                }
                return copyContact
            }
            return contact
        })

        dispatch({
            type: ContactActionTypes.GET_CONTACTS_SUCCESS,
            payload: {
                users: updatedContacts as Array<ContactInterface>,
                maxUsers: maxUsers
            }
        })
    }