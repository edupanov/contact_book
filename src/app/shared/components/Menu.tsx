import React, {SyntheticEvent} from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import style from "../../components/pages/mainPage/mainPage.module.scss";
import {NavLink} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";

type MenuPropsType = {
    loginClickHandler?: (event: SyntheticEvent) => void
    auth: string
    exitClickHandler?: ()=> void
}

const Menu = (props: MenuPropsType) => {
    const {auth, loginClickHandler, exitClickHandler} = props
    return (
        <AppBar position="relative">
            <Toolbar className={style.nav}>
                <NavLink className={style.link} to={'/contacts'}>
                    <Typography variant="h6">
                        Contact Book
                    </Typography>
                </NavLink>
                <Button
                    color="inherit"
                    onClick={loginClickHandler || exitClickHandler}
                >
                    {auth==='Login' ? auth : <NavLink className={style.link} to={'/'}>{auth}</NavLink>}
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Menu;