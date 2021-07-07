import * as contactsActionCreators from '../components/contactList/store/actionCreators/contactActionCreators'
import * as loginActionCreators from '../components/mainPage/loginForm/store/actionCreators/loginActionCreators'
import * as searchUserActionCreators from '../components/searchUser/store/actionCreators/searchUserActionCreators'

// eslint-disable-next-line import/no-anonymous-default-export
export default  {
    ...contactsActionCreators,
    ...loginActionCreators,
    ...searchUserActionCreators

}