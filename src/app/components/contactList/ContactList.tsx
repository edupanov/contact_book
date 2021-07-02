import React, {useEffect} from 'react';
import style from "./ContactList.module.scss"
import {useActions} from "../../store/hooks/useActions";
import {useTypeSelector} from "../../store/hooks/useTypeSelector";
import ContactListItem from "./chunks/ContactListItem";
import {ContactInterface} from "./types/contact.interface";
import {CircularProgress} from "@material-ui/core";


const ContactLIst = () => {

    const {getContacts} = useActions()
    const {isLoading, data} = useTypeSelector(state => state.contacts)
    useEffect(() => {
        getContacts(10, 1)
    }, [])

    if (isLoading) {
        return <CircularProgress color="secondary"/>
    }

    return (
        <div className={style.wrapper}>
            {
                data?.map((user: ContactInterface, index: number) => {
                    return <ContactListItem user={user} key={index + 'userList'}/>
                })
            }
        </div>
    );

}

export default ContactLIst