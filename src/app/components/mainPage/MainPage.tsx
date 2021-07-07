import React from 'react';
import HeaderMainPage from "./HeaderMainPage";
import {Container} from "@material-ui/core";
import {Route} from "react-router-dom";
import MainForm from "../mainForm/MainForm";
import style from './mainPage.module.scss'

const MainPage = () => {
    return (
        <div className={style.wrapper}>
            <HeaderMainPage/>
            {/*<LoginForm/>*/}
            <Container
                className={style.container}
                fixed>
                <Route path={"/contacts"} component={MainForm}/>
            </Container>

        </div>
    );
};

export default MainPage;