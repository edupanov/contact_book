import React from 'react';
import {Button, Grid, IconButton, Typography, withStyles} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import styles from './HeaderMainForm.module.scss'
import UserLIst from "./user/UserLIst.jsx";
import MainFormBottom from "./MainFormBottom";


class HeaderMainForm extends React.Component {


    render() {

        return (
            <div>
                <Grid
                    className={styles.headerWrapper}
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => {
                            alert('clicked')
                        }}>
                        Создать новый контакт
                    </Button>
                    <div className={""}>
                        <IconButton aria-label="delete" onClick={() => {
                            console.log('delete')
                        }}>
                            <DeleteIcon/>
                        </IconButton>
                        <IconButton aria-label="edit" onClick={() => {
                            console.log('edit')
                        }}>
                            <EditIcon/>
                        </IconButton>
                        <IconButton aria-label="edit" onClick={() => {
                            console.log('search')
                        }}>
                            <SearchIcon/>
                        </IconButton>
                        <Button
                            variant="contained"
                            size="medium"
                            color="primary"
                            target="_top"
                            rel="noopener noreferrer"
                        >
                            <Typography variant="button" style={{fontSize: '0.79rem'}}>
                                Отправить E-mail
                            </Typography>
                        </Button>
                    </div>
                </Grid>
                <UserLIst/>
                <MainFormBottom/>
            </div>
        );
    }
}

export default HeaderMainForm