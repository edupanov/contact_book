import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import {FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {useStyles} from "../../../deleteModal/style/styleModal";
import {TargetType} from "../../../searchPage/SearchPage";
import {PhoneInterface} from "../../../../contactList/types/contact.interface";

interface EditPhoneFormInterface {
    phone: PhoneInterface,
    setPhone: Dispatch<SetStateAction<PhoneInterface>>
}

export const EditPhoneForm = (props: EditPhoneFormInterface) => {
    const classes = useStyles();

    let {phone, setPhone} = props

    const changePhoneInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)
        if (phone) {
            phone = {...phone, [target.name]: target.value}
        }
        sessionStorage.setItem('phone', JSON.stringify(phone));
        setPhone(phone)
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
                                               name={"phoneType"}
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
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>

    );
};

