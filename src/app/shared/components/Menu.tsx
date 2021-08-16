import React, {SyntheticEvent} from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import style from "../../components/pages/mainPage/mainPage.module.scss";
import {NavLink, useHistory} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import {useTypeSelector} from "../../store/hooks/useTypeSelector";
import {Redirect} from "react-router";

type MenuPropsType = {
    loginClickHandler?: (event: SyntheticEvent) => void
    auth: string
    exitClickHandler?: () => void
}

const Menu = (props: MenuPropsType) => {

    const isSuccess = useTypeSelector(state => state.login.isSuccess)
    const {auth, loginClickHandler, exitClickHandler} = props
    const history = useHistory()

    const redirect = () => {
        if (isSuccess) {
          history.push('/contacts')
        }
    }

    return (
        <AppBar position="relative">
            <Toolbar className={style.nav}>

                <Typography className={style.navTitle} variant="h6" onClick={event => {
                    if (loginClickHandler) {
                        loginClickHandler(event)
                    } else redirect()
                }
                }>
                    Contact Book
                </Typography>

                <Button
                    color="inherit"
                    onClick={loginClickHandler || exitClickHandler}
                >
                    {auth === 'Login' ? auth : <NavLink className={style.link} to={'/'}>{auth}</NavLink>}
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Menu;