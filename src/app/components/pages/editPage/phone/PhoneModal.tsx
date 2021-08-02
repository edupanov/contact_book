import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {useStyles} from "../../deleteModal/style/styleModal";
import {IconButton} from "@material-ui/core";
import {GridCloseIcon} from "@material-ui/data-grid";

interface PhoneEditModalType  {
    open: boolean,
    onClose: () => void,

    title: string
    body: JSX.Element
    buttons: JSX.Element
}

export const PhoneModal = (props: PhoneEditModalType) => {
    let {title, body, buttons, open, onClose} = props
    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={onClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <IconButton
                            className={classes.modalButtonClose}
                            onClick={onClose}
                            aria-label="close">
                            <GridCloseIcon/>
                        </IconButton>
                        <h2 id="transition-modal-title">{title}</h2>
                        {body}
                        {buttons}
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
