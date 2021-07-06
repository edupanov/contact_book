import * as contactsActionCreators from '../components/contactList/store/actionCreators/contactActionCreators'
import * as loginActionCreators from '../components/mainPage/loginForm/store/actionCreators/loginActionCreators'

// eslint-disable-next-line import/no-anonymous-default-export
export default  {
    ...contactsActionCreators,
    ...loginActionCreators

}