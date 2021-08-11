import React, {ChangeEvent} from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {useStylesModal} from "../../deleteModal/style/styleModal";
import {ContactInterface, PhoneInterface} from "../../../contactList/types/contact.interface";

interface EditPhoneFormInterface {
    setOpen: Function
    phone: PhoneInterface
    contact: ContactInterface
}

export const EditPhoneForm = (props: EditPhoneFormInterface) => {

    const classes = useStylesModal();
    let {phone, setOpen} = props

    const changePhoneInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target

        if (name === 'countryCode') {
            phone.countryCode = value
        }
        if (name === 'operatorID') {
            phone.operatorID = value
        }
        if (name === 'phoneNumber') {
            phone.phoneNumber = value
        }
        if (name === 'phoneType') {
            phone.phoneType = value
        }
        if (name === 'comment') {
            phone.comment = value
        }
    }

    const onSubmit = () => {
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
                                               name={"phoneNumber"}
                                               type="search"
                                               onChange={changePhoneInfoHandler}
                                               defaultValue={phone.phoneNumber ? phone.phoneNumber : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Описание"
                                               name={"phoneType"}
                                               type="search"
                                               onChange={changePhoneInfoHandler}
                                               defaultValue={phone.phoneType ? phone.phoneType : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Коментарий"
                                               name={"comment"}
                                               type="search"
                                               onChange={changePhoneInfoHandler}
                                               defaultValue={phone.comment ? phone.comment : ''}
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

