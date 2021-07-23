import React, {ChangeEvent, FormEvent, SyntheticEvent, useState} from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {useActions} from "../../../store/hooks/useActions";
import {useStyles} from "./styles/editContactStyles";
import {TargetType} from "../searchPage/SearchPage";
import {useHistory, useLocation} from "react-router-dom";
import {PATH} from "../../../routes/Routes";
import Avatar from "./avatar/Avatar";
import PhoneForm from "./phone/PhoneForm";
import AttachmentsForm from "./attachments/AttachmentsForm";
import {LocationType} from "./type/editPage.type";
import {PhoneInterface} from "../../contactList/types/contact.interface";

const EditPage = () => {
    const history = useHistory()
    const location = useLocation<LocationType>()

    let contact = location.state.contact
    const classes = useStyles()
    const {updateContact} = useActions()

    const savedPhone: PhoneInterface = JSON.parse(sessionStorage.getItem('phone') || '{}');
    console.log(savedPhone)


    const changeContactInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)
        const isDate = target.name === 'birthDate'
        const replaceStr = event.target.value.replace(/-/g, ' ').split(' ').reverse().join('.')
        if (contact) {
            contact = {...contact, [target.name]: isDate ? replaceStr : target.value}
        }
    }
    const changeContactAddressHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)
        contact = {...contact, address: {...contact.address, id: contact.address.id, [target.name]: target.value}}
    }

    const onSubmit = (event: FormEvent) => {
        event.preventDefault()
        updateContact({contact})
        history.push(PATH.HOME)
    }

    return (
        <div className={classes.editForm}>
            <div className={classes.avatar}><Avatar/></div>
            <div>
                <h2 className={classes.title}>Редактирование контакта </h2>
                <Grid container justify="center">
                    <Grid item xs={10}>
                        <form onSubmit={onSubmit}>
                            <FormControl>
                                <FormGroup>
                                    <div className={classes.wrapperInput}>
                                        <TextField className={classes.input}
                                                   label="Имя"
                                                   name={"name"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={contact.name ? contact.name : ''}
                                        />
                                        <TextField className={classes.input}
                                                   label="Фамилия"
                                                   name={"surname"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={contact.surname ? contact.surname : ''}
                                        />
                                        <TextField className={classes.input}
                                                   label="Отчество"
                                                   name={"patronymic"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={contact.patronymic ? contact.patronymic : ''}
                                        />
                                        <TextField className={classes.date}
                                                   helperText="Дата рождения"
                                                   name={"birthDate"}
                                                   type="date"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={contact.birthDate ? contact.birthDate.split('.').reverse().join('-') : ''}
                                        />
                                        <TextField className={classes.input}
                                                   label="Пол"
                                                   name={"gender"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={contact.gender ? contact.gender : ''}
                                        />
                                        <TextField className={classes.input}
                                                   label="Семейное положение"
                                                   name={"maritalStatus"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={contact.maritalStatus ? contact.maritalStatus : ''}
                                        />
                                        <TextField className={classes.input}
                                                   label="Гражданство"
                                                   name={"nationality"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={contact.nationality ? contact.nationality : ''}
                                        />
                                        <div>
                                            <h3 className={classes.title}>Адрес</h3>
                                            <br/><TextField className={classes.input}
                                                            label="Страна"
                                                            name={"country"}
                                                            type="search"
                                                            onChange={changeContactAddressHandler}
                                                            defaultValue={contact.address?.country ? contact.address?.country : ''}
                                        />
                                            <TextField className={classes.input}
                                                       label="Город"
                                                       name={"city"}
                                                       type="search"
                                                       onChange={changeContactAddressHandler}
                                                       defaultValue={contact.address?.city ? contact.address?.city : ''}
                                            />
                                            <TextField className={classes.input}
                                                       label="Улица"
                                                       name={"street"}
                                                       type="search"
                                                       onChange={changeContactAddressHandler}
                                                       defaultValue={contact.address?.street ? contact.address?.street : ''}
                                            />
                                            <TextField className={classes.input}
                                                       label="Номер дома"
                                                       name={"building"}
                                                       type="number"
                                                       onChange={changeContactAddressHandler}
                                                       defaultValue={contact.address?.building ? contact.address?.building : ''}
                                            />
                                            <TextField className={classes.input}
                                                       label="Номер квартиры"
                                                       name={"flat"}
                                                       type="number"
                                                       onChange={changeContactAddressHandler}
                                                       defaultValue={contact.address?.flat ? contact.address?.flat : ''}
                                            />
                                            <TextField className={classes.input}
                                                       label="Индекс"
                                                       name={"zipCode"}
                                                       type="number"
                                                       onChange={changeContactAddressHandler}
                                                       defaultValue={contact.address?.zipCode ? contact.address?.zipCode : ''}
                                            />
                                        </div>
                                    </div>
                                    <PhoneForm/>
                                    <AttachmentsForm/>

                                    <div className={classes.submitButton}>
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

    );
};

export default EditPage;
