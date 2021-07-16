import React, {ChangeEvent, FC, useState} from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {useActions} from "../../../store/hooks/useActions";
import {TargetType} from "../searchPage/SearchPage";
import {useStyles} from "../editPage/styles/editContactStyles";

const AddPage: FC = () => {
    const classes = useStyles()

    const {addContact, getContacts} = useActions()

    const [contactInfo, setContactInfo] = useState({})
    const [contactAddress, setContactAddress] = useState({})

    const changeContactInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {

        const target: TargetType = (event.target)
        const isDate = target.name === 'birthDate'
        const replaceStr = event.target.value.replace(/-/g, ' ').split(' ').reverse().join('.')


        setContactInfo({
            ...contactInfo,
            [target.name]: isDate ? replaceStr : target.value,
        })
    }

    const changeContactAddressHandler = (event: ChangeEvent<HTMLInputElement>) => {

        const target: TargetType = (event.target)

        setContactAddress({
            ...contactAddress,
            [target.name]: target.value,
        })
    }

    const onSubmit = () => {
        const contact = {
           contact: {
               ...contactInfo,
               address: contactAddress
           }
        }
        addContact(contact)
    }
    console.log(contactInfo)
    return (
        <div className={classes.searchPanel}>
            <h2 className={classes.title}>Добавление нового контакта</h2>
            <Grid container justify="center">
                <Grid item xs={10}>
                    <form onSubmit={onSubmit}>
                        <FormControl className={classes.form}>
                            <FormGroup className={classes.row}>
                                <div>
                                    <div className={classes.period}>
                                        <TextField className={classes.input}
                                                   label="Имя"
                                                   name={"name"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                        />
                                        <TextField className={classes.input}
                                                   label="Фамилия"
                                                   name={"surname"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                        />
                                        <TextField className={classes.input}
                                                   label="Отчество"
                                                   name={"patronymic"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                        />
                                        <TextField className={classes.input}
                                                   label="Пол"
                                                   name={"gender"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                        />
                                        <TextField className={classes.input}
                                                   label="Семейное положение"
                                                   name={"maritalStatus"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                        />
                                        <TextField className={classes.input}
                                                   label="Гражданство"
                                                   name={"nationality"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                        />
                                    </div>
                                    <div className={classes.dateWrapper}>
                                        <div>
                                            <h3 className={classes.title}>Возраст</h3>
                                        </div>
                                        <div className={classes.period}>
                                            <TextField className={classes.date}
                                                       helperText="Дата рождения"
                                                       name={"birthDate"}
                                                       type="date"
                                                       onChange={changeContactInfoHandler}
                                            />

                                        </div>
                                    </div>
                                    <div>
                                        <h3 className={classes.title}>Адрес</h3>
                                        <br/><TextField className={classes.input}
                                                        label="Страна"
                                                        name={"country"}
                                                        type="search"
                                                        onChange={changeContactAddressHandler}
                                    />
                                        <TextField className={classes.input}
                                                   label="Город"
                                                   name={"city"}
                                                   type="search"
                                                   onChange={changeContactAddressHandler}
                                        />
                                        <TextField className={classes.input}
                                                   label="Улица"
                                                   name={"street"}
                                                   type="search"
                                                   onChange={changeContactAddressHandler}
                                        />
                                        <TextField className={classes.input}
                                                   label="Номер дома"
                                                   name={"building"}
                                                   type="number"
                                                   onChange={changeContactAddressHandler}
                                        />
                                        <TextField className={classes.input}
                                                   label="Номер квартиры"
                                                   name={"flat"}
                                                   type="number"
                                                   onChange={changeContactAddressHandler}
                                        />
                                        <TextField className={classes.input}
                                                   label="Индекс"
                                                   name={"zipCode"}
                                                   type="number"
                                                   onChange={changeContactAddressHandler}
                                        />
                                    </div>

                                </div>
                                <div>
                                    <Button type={'submit'} variant={'contained'} color={'primary'}
                                            className={classes.button}>Создать новый контак</Button>
                                </div>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default AddPage;
