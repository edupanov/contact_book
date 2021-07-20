import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {NavLink} from "react-router-dom";
import {Delete} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import {useStyles} from "./style/styleModal";



export default function DeleteModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {/*<button type="button" onClick={handleOpen}>*/}
            {/*    <IconButton>*/}
            {/*        <NavLink to={'/contacts/delete'}>*/}
            {/*            <Delete/>*/}
            {/*        </NavLink>*/}
            {/*    </IconButton>*/}
            {/*</button>*/}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Transition modal</h2>
                        <p id="transition-modal-description">react-transition-group animates me.</p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
