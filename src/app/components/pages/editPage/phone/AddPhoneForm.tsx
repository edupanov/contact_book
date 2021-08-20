import React, {ChangeEvent, useState} from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {ContactInterface, PhoneInterface} from "../../../contactList/types/contact.interface";
import {useStylesAddPhone} from "./styles/styles";
import {useActions} from "../../../../store/hooks/useActions";
import {
    PhoneValidationState,
    TextCountryCode,
    TextOperatorId,
    TextPhoneNumber
} from "../../../../shared/components/customMaskInput";

interface AddPhoneFormInterface {
    setOpen: Function
    contact: ContactInterface
    setNewPhones?: Function
    newPhones?: Array<PhoneInterface>
}

export const AddPhoneForm = (props: AddPhoneFormInterface) => {

    const classes = useStylesAddPhone();
    let {setOpen, contact, setNewPhones, newPhones} = props
    const [errors, setError] = useState({
        countryCode: '',
        operatorID: '',
        phoneNumber: '',
    })
    const {addPhone} = useActions()
    const [phone, setPhone] = useState({} as PhoneInterface)
    const [values, setValues] = React.useState<PhoneValidationState>({
        countryCode: '+',
        operatorID: '',
        phoneNumber: '',
    });

    const changePhoneInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const phoneId = contact.phones ? contact.phones.length + 1 : newPhones?.length! + 1
        const {name, value} = event.target
        const updatePhone = {...phone, [name]: value, id: `phone${String(phoneId)}`}
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
        setPhone(updatePhone)
    }

    const onSubmit = () => {
        if (!contact.id) {
            setNewPhones!([...newPhones!, phone])
        } else addPhone(phone, contact.id)
        setOpen(false)
    }

    const validation = (event: React.FocusEvent<HTMLInputElement>) => {
        const target = event.target
        const regexCountryCode = /^(\+?\d{1,3}|\d{1,4})$/;
        const regexOperatorID = /^[0-9]{2}$/;
        const regexPhoneNumber = /^[0-9]{7}$/;
        if (target.name === 'countryCode') {
            if (!regexCountryCode.test(target.value)) {
                setError({...errors, countryCode: 'Поле запонено неверно'})
            } else if (regexCountryCode.test(target.value)) {
                setError({...errors, countryCode: ''})
            }
        }
        if (target.name === 'operatorID') {
            if (!regexOperatorID.test(target.value)) {
                setError({...errors, operatorID: 'Поле запонено неверно'})
            } else if (regexOperatorID.test(target.value)) {
                setError({...errors, operatorID: ''})
            }
        }
        if (target.name === 'phoneNumber') {
            if (!regexPhoneNumber.test(target.value)) {
                setError({...errors, phoneNumber: 'Поле запонено неверно'})
            } else if (regexPhoneNumber.test(target.value)) {
                setError({...errors, phoneNumber: ''})
            }
        }
        return errors
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
                                               title={'Код в формате +ХХХ'}
                                               label="Код станы"
                                               name={"countryCode"}
                                               type="search"
                                               value={values.countryCode}
                                               onBlur={validation}
                                               onChange={changePhoneInfoHandler}
                                               InputProps={{
                                                   inputComponent: TextCountryCode as any,
                                               }}
                                    />
                                    {errors.countryCode ?
                                        <div className={classes.error}>{errors.countryCode}</div> : null}

                                    <TextField className={classes.input}
                                               title={'Код в формате ХХ'}
                                               label="Код оператора"
                                               name={"operatorID"}
                                               type="search"
                                               value={values.operatorID}
                                               onBlur={validation}
                                               onChange={changePhoneInfoHandler}
                                               InputProps={{
                                                   inputComponent: TextOperatorId as any,
                                               }}
                                    />
                                    {errors.operatorID ?
                                        <div className={classes.error}>{errors.operatorID}</div> : null}

                                    <TextField className={classes.input}
                                               title={'Номера в формате ХХХХХХХ'}
                                               label="Телефонный номер"
                                               name={"phoneNumber"}
                                               type="search"
                                               value={values.phoneNumber}
                                               onBlur={validation}
                                               onChange={changePhoneInfoHandler}
                                               InputProps={{
                                                   inputComponent: TextPhoneNumber as any,
                                               }}
                                    />
                                    {errors.phoneNumber ?
                                        <div className={classes.error}>{errors.phoneNumber}</div> : null}

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
