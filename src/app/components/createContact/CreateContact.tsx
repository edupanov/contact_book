import React, {useRef, useState} from 'react';
import {Button, CircularProgress, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {useActions} from "../../store/hooks/useActions";
import {useStyles} from "./styles/createContactStyles";
import {ContactInterface} from "../contactList/types/contact.interface";

const CreateContact = (props: { item: ContactInterface }) => {

    const {item} = props

    const classes = useStyles()

    const {getContacts} = useActions()

    const changeHandler = () => {

    }

    const onSubmit = () => {
        getContacts()
    }

    if (Object.keys(item).length === 0) {
         return <p className={classes.errorTitle}>Выберите пользователя из списка</p>
    }

    return (
        <div className={classes.searchPanel}>
            <h2 className={classes.title}>Создание и редактирование контакта </h2>
            <Grid container justify="center">
                <Grid item xs={10}>
                    <form onSubmit={onSubmit}>
                        <FormControl>
                            <FormGroup>
                                <div>
                                    <TextField className={classes.input}
                                               label="Имя"
                                               name={"name"}
                                               type="search"
                                               onChange={changeHandler}
                                               value={props.item.name ? props.item.name : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Фамилия"
                                               name={"surname"}
                                               type="search"
                                               onChange={changeHandler}
                                               value={props.item.surname ? props.item.surname : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Отчество"
                                               name={"patronymic"}
                                               type="search"
                                               onChange={changeHandler}
                                               value={props.item.patronymic ? props.item.patronymic : ''}
                                    />
                                    <TextField className={classes.date}
                                               helperText="Дата рождения"
                                               name={"birthDate"}
                                               type="date"
                                               onChange={changeHandler}
                                               value={props.item.birthDate ? props.item.birthDate : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Пол"
                                               name={"gender"}
                                               type="search"
                                               onChange={changeHandler}
                                               value={props.item.gender ? props.item.gender : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Семейное положение"
                                               name={"maritalStatus"}
                                               type="search"
                                               onChange={changeHandler}
                                               value={props.item.maritalStatus ? props.item.maritalStatus : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Гражданство"
                                               name={"nationality"}
                                               type="search"
                                               onChange={changeHandler}
                                               value={props.item.nationality ? props.item.nationality : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Текущее место работы"
                                               name={"job"}
                                               type="search"
                                               onChange={changeHandler}
                                    />
                                    <TextField className={classes.input}
                                               label="Web site"
                                               name={"webSite"}
                                               type="search"
                                               onChange={changeHandler}
                                    />
                                    <TextField className={classes.input}
                                               label="Email"
                                               name={"email"}
                                               type="search"
                                               onChange={changeHandler}
                                    />
                                    <div>
                                        <h3 className={classes.title}>Адрес</h3>
                                        <br/><TextField className={classes.input}
                                                        label="Страна"
                                                        name={"country"}
                                                        type="search"
                                                        onChange={changeHandler}
                                                        value={props.item?.address!.country! ? props.item.address.country : ''}
                                    />
                                        <TextField className={classes.input}
                                                   label="Город"
                                                   name={"city"}
                                                   type="search"
                                                   onChange={changeHandler}
                                                   value={props.item?.address.city! ? props.item.address.city : ''}
                                        />
                                        <TextField className={classes.input}
                                                   label="Улица"
                                                   name={"street"}
                                                   type="search"
                                                   onChange={changeHandler}
                                                   value={props.item?.address.street ? props.item.address.street : ''}
                                        />
                                        <TextField className={classes.input}
                                                   label="Номер дома"
                                                   name={"building"}
                                                   type="number"
                                                   onChange={changeHandler}
                                                   value={props.item?.address.building! ? props.item.address.building : ''}
                                        />
                                        <TextField className={classes.input}
                                                   label="Номер квартиры"
                                                   name={"flat"}
                                                   type="number"
                                                   onChange={changeHandler}
                                                   value={props.item?.address.flat! ? props.item.address.flat : ''}
                                        />
                                        <TextField className={classes.input}
                                                   label="Индекс"
                                                   name={"zipCode"}
                                                   type="number"
                                                   onChange={changeHandler}
                                                   value={props.item?.address.zipCode! ? props.item.address.zipCode : ''}
                                        />
                                    </div>
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

    );
};

export default CreateContact;