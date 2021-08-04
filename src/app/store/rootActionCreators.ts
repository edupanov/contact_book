import * as contactsActionCreators from '../components/contactList/store/actionCreators/contactActionCreators'
import * as loginActionCreators from '../components/pages/mainPage/loginForm/store/actionCreators/loginActionCreators'
import * as searchUserActionCreators from '../components/pages/searchPage/store/actionCreators/searchContactActionCreators'
import * as createContactActionCreators from '../components/pages/addPage/store/actionCreators/addContactActionCreator'
import * as updateContactActionCreators from '../components/pages/editPage/store/actionCreators/updateContactActionCreator'
import * as deleteContactActionCreators from '../components/pages/deleteModal/store/actionCreators/deleteContactActionCreator'
import * as addPhoneActionCreators from '../components/pages/editPage/phone/addForm/store/actionCreators/addPhoneActionCreator'
import * as deletePhoneActionCreators from '../components/pages/editPage/phone/deletePhone/store/actionCreators/deletePhoneActionCreator'
import * as sendMailActionCreator from '../components/pages/emailPage/store/actionCtreators/sendMailActionCreator'
import * as saveAvatarActionCreator from '../components/pages/editPage/avatar/store/actionsCreators/avatarActionCreator'
import * as AttachmentActionCreator from '../components/pages/editPage/attachments/store/actionCreators/attachmentActionCreator'


// eslint-disable-next-line import/no-anonymous-default-export
export default  {
    ...contactsActionCreators,
    ...loginActionCreators,
    ...searchUserActionCreators,
    ...createContactActionCreators,
    ...updateContactActionCreators,
    ...deleteContactActionCreators,
    ...addPhoneActionCreators,
    ...deletePhoneActionCreators,
    ...sendMailActionCreator,
    ...saveAvatarActionCreator,
    ...AttachmentActionCreator,

}
