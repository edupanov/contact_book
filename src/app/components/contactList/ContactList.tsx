import React, {useEffect} from 'react';
import style from "./ContactList.module.scss"
import {useActions} from "../../store/hooks/useActions";
import {useTypeSelector} from "../../store/hooks/useTypeSelector";


const ContactLIst = () => {

    const {getContacts} = useActions()
    const {isLoading} = useTypeSelector(state => state.contacts)
    // useEffect(() => {
    //     getContacts(10, 1)
    //         .then(()=>{})
    // }, [getContacts]) // eslint-disable-line react-hooks/exhaustive-deps

    console.log(isLoading)

    return (
        <div className={style.wrapper}>
            {/*{*/}
            {/*    this.props.userList ? this.props.userList.map((user, index) => {*/}
            {/*        return <UserListItem  user={user} key={index + 'userList'} />*/}
            {/*    }) : null*/}
            {/*}*/}
        </div>
    );

}

export default ContactLIst