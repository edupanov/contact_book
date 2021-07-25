import React, {ChangeEvent, FormEvent} from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {useStyles} from "../../deleteModal/style/styleModal";
import {Button, FormControl, FormGroup, Grid, IconButton, TextField} from "@material-ui/core";
import {PhoneInterface} from "../../../contactList/types/contact.interface";
import {TargetType} from "../../searchPage/SearchPage";
import {GridCloseIcon} from "@material-ui/data-grid";
import {useHistory} from "react-router-dom";
import {PATH} from "../../../../routes/Routes";

type PhoneEditModalType = {
    open: boolean,
    onClose: () => void,
    phone: PhoneInterface
}

export default function PhoneEditModal(props: PhoneEditModalType) {
const history = useHistory()
    let {open, onClose, phone} = props
    const classes = useStyles();

    const changePhoneInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)
        if (phone) {
            phone = {...phone, [target.name]: target.value}
        }
    }

    const onSubmit = (event: FormEvent) => {
        // event.preventDefault()
        sessionStorage.setItem('phone', JSON.stringify([phone]));
        onClose()
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
                        <IconButton
                            className={classes.modalButtonClose}
                            onClick={onClose}
                            aria-label="close">
                            <GridCloseIcon/>
                        </IconButton>
                        <h2 id="transition-modal-title">Редактирование телефонного номера</h2>
                        <div>
                            <Grid container justify="center">
                                <Grid item xs={10}>
                                    <form>
                                        <FormControl>
                                            <FormGroup>
                                                <div className={classes.wrapperInput}>
                                                    <TextField className={classes.input}
                                                               label="Код станы"
                                                               name={"countryCode"}
                                                               type="search"
                                                               onChange={changePhoneInfoHandler}
                                                               defaultValue={phone.countryCode ? phone.countryCode : ''}
                                                    />
                                                    <TextField className={classes.input}
                                                               label="Код оператора"
                                                               name={"operatorID"}
                                                               type="search"
                                                               onChange={changePhoneInfoHandler}
                                                               defaultValue={phone.operatorID ? phone.operatorID : ''}
                                                    />
                                                    <TextField className={classes.input}
                                                               label="Телефонный номер"
                                                               name={"phone"}
                                                               type="search"
                                                               onChange={changePhoneInfoHandler}
                                                               defaultValue={phone.phoneNumber ? phone.phoneNumber : ''}
                                                    />
                                                    <TextField className={classes.input}
                                                               label="Описание"
                                                               name={"comment"}
                                                               type="search"
                                                               onChange={changePhoneInfoHandler}
                                                               defaultValue={phone.comment ? phone.comment : ''}
                                                    />
                                                    <TextField className={classes.input}
                                                               label="Коментарий"
                                                               name={"description"}
                                                               type="search"
                                                               onChange={changePhoneInfoHandler}
                                                               defaultValue={phone.phoneType ? phone.phoneType : ''}
                                                    />
                                                </div>
                                                <div>
                                                    <Button
                                                        className={classes.button}
                                                        variant={'contained'}
                                                        onClick={onSubmit}
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
