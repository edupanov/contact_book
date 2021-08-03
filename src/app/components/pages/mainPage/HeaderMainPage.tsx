import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import style from './headerMainPage.module.scss';
import {NavLink} from 'react-router-dom';


export default function HeaderMainPage() {


    return (
        <div className={style.root}>
            <AppBar position="static">
                <Toolbar className={style.wrapper}>
                    <NavLink className={style.link} to={'/contacts'}>
                        <Typography variant="h6">
                            Contact Book
                        </Typography>
                    </NavLink>
                    <Button color="inherit">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
