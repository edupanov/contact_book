import React, {SyntheticEvent} from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {useStylesModal} from "./style/styleModal";
import {GridRowId} from "@material-ui/data-grid";
import {Button, Typography} from "@material-ui/core";
import {useActions} from "../../../store/hooks/useActions";

type DeleteType = {
    open: boolean,
    onClose: () => void,
    selectionModel: GridRowId[]
    deleteContact: (event: SyntheticEvent)=> void
}

export default function DeleteModal(props: DeleteType) {

    const {deleteContacts, deleteAll} =useActions()
    const {open, onClose, selectionModel} = props

    const classes = useStylesModal();
    const deleteContact = (e: any) => {
        if(selectionModel.length >= 5) {
            deleteAll()
            onClose()
        }
        if (selectionModel.length < 5) {
            deleteContacts(selectionModel)
            onClose()
        }
    }
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
                        <h2 id="transition-modal-title">Вы действительно хотите удалить выбранные контакты?</h2>
                        <Button
                            // className={classes.}
                            onClick={ deleteContact}
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
