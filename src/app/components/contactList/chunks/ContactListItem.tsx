import React from 'react';
import {Checkbox} from "@material-ui/core";
import style from "../../mainForm/user/User.module.scss";
import {ContactInterface} from "../types/contact.interface";

interface ContactListProps {
    user: ContactInterface
}

const ContactListItem = ({user}: ContactListProps) => {

    const {name, surname, patronymic} = user;

    return (
        <div className={style.user}>
            <Checkbox
                color="primary"
            />
            <div className={style.userInfo}>
                <span>{name}</span>
                <span>{surname}</span>
                <span>{patronymic}</span>
            </div>
        </div>
    );

}

export default ContactListItem;