import React, {SyntheticEvent} from 'react';
import {Container} from "@material-ui/core";
import style from './mainPage.module.scss'
import ContactList from "../../contactList/ContactList";
import LoginForm from "./loginForm/LoginForm";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {NavLink} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {useTypeSelector} from "../../../store/hooks/useTypeSelector";

const MainPage = () => {

    const {isLoading} = useTypeSelector(state => state.contacts)

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
                <AppBar position="static">
                    <Toolbar className={style.nav}>
                        <NavLink className={style.link} to={'/contacts'}>
                            <Typography variant="h6">
                                Contact Book
                            </Typography>
                        </NavLink>
                        <Button
                            color="inherit"
                            onClick={loginClickHandler}
                        >

                            Login
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
            <div>
                <h1 className={style.title}>Книга Контактов</h1>

            </div>

            <div className={style.footer}>
                <span>by Egor Dupanov (Bostil Support)</span>
                <span>P.S. дизайнер с меня так себе</span>
            </div>

            {openLogin ? <LoginForm openLoginFormClickHandler={openLoginFormClickHandler}/> : null}
        </div>
    );
};

export default MainPage;