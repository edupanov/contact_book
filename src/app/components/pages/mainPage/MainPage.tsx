import React from 'react';
import HeaderMainPage from "./HeaderMainPage";
import {Container} from "@material-ui/core";
import style from './mainPage.module.scss'
import ContactList from "../../contactList/ContactList";

const MainPage = () => {
    return (
        <div className={style.wrapper}>
            <HeaderMainPage/>
            {/*<LoginForm/>*/}
            <Container
                className={style.container}
                fixed>
                <ContactList/>
            </Container>

        </div>
    );
};

export default MainPage;