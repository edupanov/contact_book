import React, {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from 'react';
import {FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {PhoneInterface} from "../../../../contactList/types/contact.interface";
import {useStyles} from "../../../deleteModal/style/styleModal";

interface AddPhoneFormInterface {
    newPhone: PhoneInterface,
    setNewPhone: Dispatch<SetStateAction<PhoneInterface>>
}

const initialFormValues = {
    countryCode: "",
    operatorID: "",
    phoneNumber: "",
    phoneType: "",
    comment: "",
    formSubmitted: false,
    success: false
}
export const AddPhoneForm = (props: AddPhoneFormInterface) => {

    const classes = useStyles();
    let {newPhone, setNewPhone} = props
    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({} as any);


    const validate: any = (fieldValues = values) => {
        let temp: any = {...errors}

        if ("countryCode" in fieldValues) {
            temp.countryCode = fieldValues.countryCode ? "" : "This field is required."
            if (fieldValues.countryCode)
                temp.countryCode = !/^[0-9]{3}$/i.test(fieldValues.countryCode)
                    ? ""
                    : "Введите код в формате XXX"
        }
        if ("operatorID" in fieldValues) {
            temp.operatorID = fieldValues.operatorID ? "" : "This field is required."
            if (fieldValues.operatorID)
                temp.operatorID = !/^[0-9]{2}$/i.test(fieldValues.operatorID)
                    ? ""
                    : "Введите код в формате XXX"
        }
        if ("phoneNumber" in fieldValues) {
            temp.phoneNumber = fieldValues.phoneNumber ? "" : "This field is required."
            if (fieldValues.phoneNumber)
                temp.phoneNumber = !/^[0-9]{7}$/i.test(fieldValues.phoneNumber)
                    ? ""
                    : "Введите код в формате XXX"
        }
        if ("phoneType" in fieldValues)
            temp.phoneType = fieldValues.phoneType ? "" : "This field is required."

        if ("comment" in fieldValues)
            temp.comment = fieldValues.comment ? "" : "This field is required."

        setErrors({
            ...temp
        });
    }


        const changePhoneInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
            const {name, value} = event.target

            if (newPhone) {
                newPhone = {...newPhone, [name]: value}
                // setValues({
                //     ...values,
                //     [name]: value
                // });

            }
            sessionStorage.setItem('newPhone', JSON.stringify(newPhone));
            setNewPhone(newPhone)
            // validate(values);
        }

    console.log(values)


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
                                                   {...(errors[values.countryCode] && { error: true, helperText: errors[values.countryCode] })}
                                        />
                                        <TextField className={classes.input}
                                                   label="Код оператора"
                                                   name={"operatorID"}
                                                   type="search"
                                                   onChange={changePhoneInfoHandler}
                                                   {...(errors[values.operatorID] && { error: true, helperText: errors[values.operatorID] })}
                                        />
                                        <TextField className={classes.input}
                                                   label="Телефонный номер"
                                                   name={"phoneNumber"}
                                                   type="search"
                                                   onChange={changePhoneInfoHandler}
                                                   {...(errors[values.phoneNumber] && { error: true, helperText: errors[values.phoneNumber] })}
                                        />
                                        <TextField className={classes.input}
                                                   label="Тип"
                                                   name={"phoneType"}
                                                   type="search"
                                                   onChange={changePhoneInfoHandler}
                                                    {...(errors[values.phoneType] && { error: true, helperText: errors[values.phoneType] })}
                                        />
                                        <TextField className={classes.input}
                                                   label="Коментарий"
                                                   name={"comment"}
                                                   type="search"
                                                   onChange={changePhoneInfoHandler}
                                                    {...(errors[values.comment] && { error: true, helperText: errors[values.comment] })}
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
