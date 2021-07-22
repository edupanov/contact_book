import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {GridRowId} from "@material-ui/data-grid";
import {Button, Typography} from "@material-ui/core";
import {useStyles} from "../../deleteModal/style/styleModal";

type PhoneEditModalType = {
    open: boolean,
    onClose: () => void,
}

export default function PhoneEditModal(props:PhoneEditModalType) {

    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.open}
                onClose={props.onClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Вы действительно хотите удалить выбранные контакты?</h2>
                        <Button

                            variant="contained"
                            color="secondary"
                        >
                            <Typography variant="button" style={{fontSize: '0.79rem'}}>
                                Удалить
                            </Typography>
                        </Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
