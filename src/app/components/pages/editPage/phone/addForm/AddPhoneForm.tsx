import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import {FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {TargetType} from "../../../searchPage/SearchPage";
import {PhoneInterface} from "../../../../contactList/types/contact.interface";
import {useStyles} from "../../../deleteModal/style/styleModal";
import {AddPhoneInterface} from "./types/addPhone.interface";

interface AddPhoneFormInterface {
    newPhone: PhoneInterface,
    setNewPhone: Dispatch<SetStateAction<PhoneInterface>>
}

export const AddPhoneForm = (props: AddPhoneFormInterface) => {
    const classes = useStyles();

    let {newPhone, setNewPhone} = props

    const changePhoneInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)
        if (newPhone) {
            newPhone = {...newPhone, [target.name]: target.value}
        }
        sessionStorage.setItem('newPhone', JSON.stringify(newPhone));

        setNewPhone(newPhone)
    }
    return (
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
                                               label="Описание"
                                               name={"comment"}
                                               type="search"
                                               onChange={changePhoneInfoHandler}
                                    />
                                    <TextField className={classes.input}
                                               label="Коментарий"
                                               name={"description"}
                                               type="search"
                                               onChange={changePhoneInfoHandler}
                                    />
                                </div>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>

    );
};

