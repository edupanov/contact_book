import React, {ChangeEvent, FormEvent} from 'react';
import {Button, FormControl, FormGroup, Grid, IconButton, TextField} from "@material-ui/core";
import {useActions} from "../../../store/hooks/useActions";
import {useStyles} from "./styles/editContactStyles";
import {TargetType} from "../searchPage/SearchPage";
import {updateContact} from "./store/actionCreators/updateContactActionCreator";
import {ContactInterface} from "../../contactList/types/contact.interface";
import {NavLink} from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import {GridCloseIcon} from "@material-ui/data-grid";

type UpdateContactType = {
    contact: ContactInterface,
    setContact: Function
}

const EditPage = (props: UpdateContactType) => {


    const {contact, setContact} = props

    const classes = useStyles()

    const {updateContact} = useActions()


    const changeContactInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)
        const isDate = target.name === 'birthDate'
        const replaceStr = event.target.value.replace(/-/g, ' ').split(' ').reverse().join('.')

        setContact({
            ...contact,
            [target.name]: isDate ? replaceStr : target.value,
        })
    }

    const changeContactAddressHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)
        setContact({
            ...contact,
            address: {...contact.address, [target.name]: target.value}
        })
    }

    const onSubmit = (event: FormEvent) => {
        event.preventDefault()
        updateContact({contact})
    }
    if (Object.keys(contact).length === 0) {
        return <p className={classes.errorTitle}>Выберите пользователя из списка</p>
    }

    return (
        <div className={classes.searchPanel}>
            <h2 className={classes.title}>Редактирование контакта </h2>
            <NavLink className={classes.close} to={'/contacts'} exact >
                <IconButton aria-label="close">
                        <GridCloseIcon/>
                </IconButton>
            </NavLink>
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
                                               onChange={changeContactInfoHandler}
                                               value={contact.name ? contact.name : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Фамилия"
                                               name={"surname"}
                                               type="search"
                                               onChange={changeContactInfoHandler}
                                               value={contact.surname ? contact.surname : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Отчество"
                                               name={"patronymic"}
                                               type="search"
                                               onChange={changeContactInfoHandler}
                                               value={contact.patronymic ? contact.patronymic : ''}
                                    />
                                    <TextField className={classes.date}
                                               helperText="Дата рождения"
                                               name={"birthDate"}
                                               type="date"
                                               onChange={changeContactInfoHandler}
                                               value={contact.birthDate ? contact.birthDate.split('.').reverse().join('-') : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Пол"
                                               name={"gender"}
                                               type="search"
                                               onChange={changeContactInfoHandler}
                                               value={contact.gender ? contact.gender : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Семейное положение"
                                               name={"maritalStatus"}
                                               type="search"
                                               onChange={changeContactInfoHandler}
                                               value={contact.maritalStatus ? contact.maritalStatus : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Гражданство"
                                               name={"nationality"}
                                               type="search"
                                               onChange={changeContactInfoHandler}
                                               value={contact.nationality ? contact.nationality : ''}
                                    />
                                    <div>
                                        <h3 className={classes.title}>Адрес</h3>
                                        <br/><TextField className={classes.input}
                                                        label="Страна"
                                                        name={"country"}
                                                        type="search"
                                                        onChange={changeContactAddressHandler}
                                                        value={contact.address?.country ? contact.address?.country : ''}
                                    />
                                        <TextField className={classes.input}
                                                   label="Город"
                                                   name={"city"}
                                                   type="search"
                                                   onChange={changeContactAddressHandler}
                                                   value={contact.address?.city ? contact.address?.city : ''}
                                        />
                                        <TextField className={classes.input}
                                                   label="Улица"
                                                   name={"street"}
                                                   type="search"
                                                   onChange={changeContactAddressHandler}
                                                   value={contact.address?.street ? contact.address?.street : ''}
                                        />
                                        <TextField className={classes.input}
                                                   label="Номер дома"
                                                   name={"building"}
                                                   type="number"
                                                   onChange={changeContactAddressHandler}
                                                   value={contact.address?.building ? contact.address?.building : ''}
                                        />
                                        <TextField className={classes.input}
                                                   label="Номер квартиры"
                                                   name={"flat"}
                                                   type="number"
                                                   onChange={changeContactAddressHandler}
                                                   value={contact.address?.flat ? contact.address?.flat : ''}
                                        />
                                        <TextField className={classes.input}
                                                   label="Индекс"
                                                   name={"zipCode"}
                                                   type="number"
                                                   onChange={changeContactAddressHandler}
                                                   value={contact.address?.zipCode ? contact.address?.zipCode : ''}
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

export default EditPage;
