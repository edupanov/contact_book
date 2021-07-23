import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {useStyles} from "../../deleteModal/style/styleModal";
import  {PhoneInterface} from "./PhoneForm";
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";



type PhoneEditModalType = {
    open: boolean,
    onClose: () => void,
    phone: PhoneInterface
}

export default function PhoneEditModal(props:PhoneEditModalType) {
    const {open, onClose, phone} = props
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
                        <h2 id="transition-modal-title">Редактирование телефонного номера</h2>
                        <div>
                            <Grid container justify="center">
                                <Grid item xs={10}>
                                    <form onSubmit={onClose}>
                                        <FormControl>
                                            <FormGroup>
                                                <div className={classes.wrapperInput}>
                                                    <TextField className={classes.input}
                                                               label="Телефонный номер"
                                                               name={"зрщту"}
                                                               type="search"
                                                               // onChange={changeContactInfoHandler}
                                                               defaultValue={phone.phone ? phone.phone : ''}
                                                    />
                                                    <TextField className={classes.input}
                                                               label="Описание"
                                                               name={"comment"}
                                                               type="search"
                                                               // onChange={changeContactInfoHandler}
                                                               defaultValue={phone.comment ? phone.comment : ''}
                                                    />
                                                    <TextField className={classes.input}
                                                               label="Коментарий"
                                                               name={"description"}
                                                               type="search"
                                                               // onChange={changeContactInfoHandler}
                                                               defaultValue={phone.description ? phone.description : ''}
                                                    />
                                                </div>

                                                <div>
                                                    <Button
                                                        className={classes.button}
                                                        type={'submit'}
                                                        variant={'contained'}
                                                        color={'primary'}
                                                    >Сохранить изменения</Button>
                                                </div>

                                            </FormGroup>
                                        </FormControl>
                                    </form>
                                </Grid>
                            </Grid>
                        </div>


                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
