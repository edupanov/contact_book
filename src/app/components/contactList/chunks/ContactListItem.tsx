import React from 'react';
import {Checkbox} from "@material-ui/core";
import style from "../../mainForm/user/User.module.scss";
import {ContactInterface} from "../types/contact.interface";


const ContactListItem = (props: ContactInterface) => {

    const {name, surname, patronymic} = props.user;

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