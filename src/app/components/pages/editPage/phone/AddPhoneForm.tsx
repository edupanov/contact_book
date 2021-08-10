import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {ContactInterface, PhoneInterface} from "../../../contactList/types/contact.interface";
import {useStyles} from "../../deleteModal/style/styleModal";
import {useActions} from "../../../../store/hooks/useActions";

interface AddPhoneFormInterface {
    setOpen: Function
    contact: ContactInterface
}

export const AddPhoneForm = (props: AddPhoneFormInterface) => {

    const classes = useStyles();
    let {setOpen, contact} = props

    const {addPhone} = useActions()
    const [phone, setPhone] = useState({} as PhoneInterface)
    const phoneId = contact.phones ? contact.phones.length + 1 : 1


    const changePhoneInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target

        const updatePhone = {...phone, [name]: value, id: `phone${String(phoneId)}`}
        setPhone(updatePhone)
    }

    const onSubmit = () => {
        addPhone(phone, contact.id)
        setOpen(false)
    }

    return (
        <div>
            <Grid container justifyContent="center">
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
                                    />
                                    <TextField className={classes.input}
                                               label="Код оператора"
                                               name={"operatorID"}
                                               type="search"
                                               onChange={changePhoneInfoHandler}
                                    />
                                    <TextField className={classes.input}
                                               label="Телефонный номер"
                                               name={"phoneNumber"}
                                               type="search"
                                               onChange={changePhoneInfoHandler}
                                    />
                                    <TextField className={classes.input}
                                               label="Тип"
                                               name={"phoneType"}
                                               type="search"
                                               onChange={changePhoneInfoHandler}
                                    />
                                    <TextField className={classes.input}
                                               label="Коментарий"
                                               name={"comment"}
                                               type="search"
                                               onChange={changePhoneInfoHandler}
                                    />
                                </div>
                            </FormGroup>
                        </FormControl>
                    </form>
                    <div>
                        <Button
                            className={classes.button}
                            variant={'contained'}
                            onClick={onSubmit}
                            color={'primary'}
                        >Сохранить изменения</Button>
                    </div>
                </Grid>
            </Grid>
        </div>

    );
};
