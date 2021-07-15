import React, {ChangeEvent} from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {useActions} from "../../../store/hooks/useActions";
import {useStyles} from "./styles/editContactStyles";
import {ContactInterface} from "../../contactList/types/contact.interface";
import {TargetType} from "../searchPage/SearchPage";

type UpdateContactType = {
    updateContact: ContactInterface,
    setUpdateContact: Function
}

const EditPage = (props: UpdateContactType) => {

    const {updateContact, setUpdateContact} = props

    const classes = useStyles()

    const {} = useActions()

    const changeContactInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)
        const isDate = target.name === 'birthDate'
        const replaceStr = event.target.value.replace(/-/g, ' ').split(' ').reverse().join('.')


        setUpdateContact({
            ...updateContact,
            [target.name]: isDate ? replaceStr : target.value,
        })
    }

   const changeContactAddressHandler = (event: ChangeEvent<HTMLInputElement>) => {
       const target: TargetType = (event.target)
       setUpdateContact({
           ...updateContact,
           address: {...updateContact.address, [target.name]: target.value}
       })
   }

    const onSubmit = () => {

    }

    if (Object.keys(updateContact).length === 0) {
        return <p className={classes.errorTitle}>Выберите пользователя из списка</p>
    }
    console.log(updateContact)
    return (
        <div className={classes.searchPanel}>
            <h2 className={classes.title}>Редактирование контакта </h2>
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
                                               value={updateContact.name ? updateContact.name : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Фамилия"
                                               name={"surname"}
                                               type="search"
                                               onChange={changeContactInfoHandler}
                                               value={updateContact.surname ? updateContact.surname : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Отчество"
                                               name={"patronymic"}
                                               type="search"
                                               onChange={changeContactInfoHandler}
                                               value={updateContact.patronymic ? updateContact.patronymic : ''}
                                    />
                                    <TextField className={classes.date}
                                               helperText="Дата рождения"
                                               name={"birthDate"}
                                               type="date"
                                               onChange={changeContactInfoHandler}
                                               value={updateContact.birthDate ? updateContact.birthDate.split('.').reverse().join('-') : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Пол"
                                               name={"gender"}
                                               type="search"
                                               onChange={changeContactInfoHandler}
                                               value={updateContact.gender ? updateContact.gender : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Семейное положение"
                                               name={"maritalStatus"}
                                               type="search"
                                               onChange={changeContactInfoHandler}
                                               value={updateContact.maritalStatus ? updateContact.maritalStatus : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Гражданство"
                                               name={"nationality"}
                                               type="search"
                                               onChange={changeContactInfoHandler}
                                               value={updateContact.nationality ? updateContact.nationality : ''}
                                    />
                                    <div>
                                        <h3 className={classes.title}>Адрес</h3>
                                        <br/><TextField className={classes.input}
                                                        label="Страна"
                                                        name={"country"}
                                                        type="search"
                                                        onChange={changeContactAddressHandler}
                                                        value={updateContact.address.country ? updateContact.address.country : ''}
                                    />
                                        <TextField className={classes.input}
                                                   label="Город"
                                                   name={"city"}
                                                   type="search"
                                                   onChange={changeContactAddressHandler}
                                                   value={updateContact.address.city! ? updateContact.address.city : ''}
                                        />
                                        <TextField className={classes.input}
                                                   label="Улица"
                                                   name={"street"}
                                                   type="search"
                                                   onChange={changeContactAddressHandler}
                                                   value={updateContact.address.street ? updateContact.address.street : ''}
                                        />
                                        <TextField className={classes.input}
                                                   label="Номер дома"
                                                   name={"building"}
                                                   type="number"
                                                   onChange={changeContactAddressHandler}
                                                   value={updateContact.address.building ? updateContact.address.building : ''}
                                        />
                                        <TextField className={classes.input}
                                                   label="Номер квартиры"
                                                   name={"flat"}
                                                   type="number"
                                                   onChange={changeContactAddressHandler}
                                                   value={updateContact.address.flat ? updateContact.address.flat : ''}
                                        />
                                        <TextField className={classes.input}
                                                   label="Индекс"
                                                   name={"zipCode"}
                                                   type="number"
                                                   onChange={changeContactAddressHandler}
                                                   value={updateContact.address.zipCode ? updateContact.address.zipCode : ''}
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