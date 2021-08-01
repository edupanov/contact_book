import React, {ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState} from 'react';
import {FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {PhoneInterface} from "../../../../contactList/types/contact.interface";
import {useStyles} from "../../../deleteModal/style/styleModal";
import {useInput} from "../../../../../utils/utils";

interface AddPhoneFormInterface {
    setNewPhone: Dispatch<SetStateAction<PhoneInterface>>
}



export const AddPhoneForm = (props: AddPhoneFormInterface) => {
    const countryCode = useInput('', {isEmpty: true, minLength: 3})
    const operatorID = useInput('', {isEmpty: true, minLength: 2})
    const phoneNumber = useInput('', {isEmpty: true, minLength: 3})
    const phoneType = useInput('', {isEmpty: true, minLength: 3})
    const comment = useInput('', {isEmpty: true, minLength: 3})
    const classes = useStyles();
    let {setNewPhone} = props
    const [values, setValues] = useState({} as PhoneInterface);


    const changePhoneInfoHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target

        if (name === 'countryCode' || 'operatorID' || 'phoneNumber' || 'phoneType' || 'comment') {
            // newPhone = {...newPhone, [name]: value}
            setValues({
                ...values,
                [name]: value
            });
        }
        sessionStorage.setItem('newPhone', JSON.stringify(values));
        setNewPhone(values)
    }

        return (
            <div>
                <Grid container justifyContent="center">
                    <Grid item xs={10}>
                        <form>
                            <FormControl>
                                <FormGroup>
                                    <div className={classes.wrapperInput}>
                                        <TextField
                                            value={countryCode.value}
                                            className={classes.input}
                                            label="Код станы"
                                            name={"countryCode"}
                                            type="search"
                                            onChange={(event) => {
                                                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                                changePhoneInfoHandler(event),
                                                    countryCode.onChange(event)
                                            }}
                                            onBlur={event => countryCode.onBlur(event)}
                                            helperText={(countryCode.isDirty && countryCode.minLength) && 'Введите' +
                                            ' код' +
                                            ' в формате +XXX'}
                                            error={(countryCode.isDirty && countryCode.isEmpty )}
                                        />
                                        <TextField
                                            value={operatorID.value}
                                            className={classes.input}
                                            label="Код оператора"
                                            name={"operatorID"}
                                            type="search"
                                            onChange={(event) => {
                                                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                                changePhoneInfoHandler(event),
                                                    operatorID.onChange(event)
                                            }}
                                            onBlur={event => operatorID.onBlur(event)}
                                            helperText={(operatorID.isDirty && operatorID.isEmpty) && 'Заполните поле'}
                                            error={(operatorID.isDirty && operatorID.isEmpty)}
                                        />
                                        <TextField
                                            value={phoneNumber.value}
                                            className={classes.input}
                                            label="Телефонный номер"
                                            name={"phoneNumber"}
                                            type="search"
                                            onChange={(event) => {
                                                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                                changePhoneInfoHandler(event),
                                                    phoneNumber.onChange(event)
                                            }}
                                            onBlur={event => phoneNumber.onBlur(event)}
                                            helperText={(phoneNumber.isDirty && phoneNumber.isEmpty) && 'Заполните поле'}
                                            error={(phoneNumber.isDirty && phoneNumber.isEmpty)}
                                        />
                                        <TextField
                                            value={phoneType.value}
                                            className={classes.input}
                                            label="Тип"
                                            name={"phoneType"}
                                            type="search"
                                            onChange={(event) => {
                                                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                                changePhoneInfoHandler(event),
                                                    phoneType.onChange(event)
                                            }}
                                            onBlur={event => phoneType.onBlur(event)}
                                            helperText={(phoneType.isDirty && phoneType.isEmpty) && 'Заполните поле'}
                                            error={(phoneType.isDirty && phoneType.isEmpty)}
                                        />
                                        <TextField
                                            value={comment.value}
                                            className={classes.input}
                                            label="Коментарий"
                                            name={"comment"}
                                            type="search"
                                            onChange={(event) => {
                                                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                                changePhoneInfoHandler(event),
                                                    comment.onChange(event)
                                            }}
                                            onBlur={event => comment.onBlur(event)}
                                            helperText={(comment.isDirty && comment.isEmpty) && 'Заполните поле'}
                                            error={(comment.isDirty && comment.isEmpty)}
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
