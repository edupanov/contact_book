import * as contactsActionCreators from '../components/contactList/store/actionCreators/contactActionCreators'
import * as loginActionCreators from '../components/pages/mainPage/loginForm/store/actionCreators/loginActionCreators'
import * as searchUserActionCreators from '../components/pages/searchPage/store/actionCreators/searchContactActionCreators'
import * as createUSerActionCreators from '../components/pages/editPage/store/actionCreators/editContactActionCreator'


// eslint-disable-next-line import/no-anonymous-default-export
export default  {
    ...contactsActionCreators,
    ...loginActionCreators,
    ...searchUserActionCreators,
    ...createUSerActionCreators

}