import React, {SyntheticEvent} from 'react';
import style from './mainPage.module.scss'
import LoginForm from "./loginForm/LoginForm";
import Toolbar from "@material-ui/core/Toolbar";
import {NavLink} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Menu from "../../../shared/components/Menu";

const MainPage = () => {

    const [openLogin, setOpenLogin] = React.useState(false);

    const openLoginFormClickHandler = () => {
        setOpenLogin(false)
    }

    const loginClickHandler = (event: SyntheticEvent) => {
        if (event.currentTarget) {
            setOpenLogin(true)
        }
    }

    return (
        <div className={style.wrapper}>
            <div className={style.root}>
                <Menu loginClickHandler={loginClickHandler} auth='Login'/>
            </div>
            <div>
                <h1 className={style.title}>Книга Контактов</h1>
            </div>
            <div className={style.footer}>
                <span className={style.footerTitle}>by Egor Dupanov (Bostil Support)</span>
            </div>

            {openLogin ? <LoginForm openLoginFormClickHandler={openLoginFormClickHandler}/> : null}

        </div>
    );
};

export default MainPage;