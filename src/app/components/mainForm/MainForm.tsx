import React from 'react';
import {Button, Grid, IconButton, Typography} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import styles from './HeaderContactList.module.scss'
import MainFormBottom from "./MainFormBottom";
import ContactList from "../contactList/ContactList";


function MainForm() {

    return (
        <div>
            <ContactList/>
            <MainFormBottom/>
        </div>
    );
}

export default MainForm