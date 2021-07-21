import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {useStyles} from "./style/styleModal";
import {useActions} from "../../../store/hooks/useActions";
import {GridRowId} from "@material-ui/data-grid";
import {Button, Typography} from "@material-ui/core";

type DeleteType = {
    open: boolean,
    onClose:  () => void,
    selectionModel: GridRowId[]
}

export default function DeleteModal(props: DeleteType) {

    const {deleteContacts} = useActions()

    const classes = useStyles();

    const deleteCheckedContacts = () => {
        deleteContacts(props.selectionModel)
        props.onClose()
    }

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
                            onClick={deleteCheckedContacts}
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
