import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {Button, FormControl, FormGroup, Grid, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {useActions} from "../../../store/hooks/useActions";
import {TargetType} from "../searchPage/SearchPage";
import {useStylesAddPage} from "./syles/addPage.styles";
import {NavLink, useHistory} from 'react-router-dom';
import {PATH} from "../../../routes/Routes";
import Menu from "../../../shared/components/Menu";

const AddPage: FC = () => {
    const classes = useStylesAddPage()
    const history = useHistory()

    const {addContact, logOut} = useActions()

    const [contactInfo, setContactInfo] = useState({})
    const [contactAddress, setContactAddress] = useState({})
    const [gender, setGender] = useState('')

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

    const ChangeGender = (event: any) => {
        setGender(event.target.value as string);
    };

    const exitClickHandler = () => {
        logOut()
    }

    const onSubmit = () => {
        const contact = {
            contact: {
                ...contactInfo,
                address: contactAddress,
                gender: gender
            }
        }
        console.log(contact)
        addContact(contact)
        history.push(PATH.HOME)
    }

    const errors = {
        name: '',
        surname: '',
        patronymic: '',
    }
    const validation = (obj: any) => {

        if (!obj.name) {
            errors.name = 'Поле не запонено'
        }
        if (!obj.surname) {
            errors.surname = 'Поле не запонено'
        }
        if (!obj.patronymic) {
            errors.patronymic = 'Поле не запонено'
        }
        return errors
    }

    useEffect(() => {
        validation(contactInfo)
    }, [contactInfo])

    return (
        <div className={classes.addPageBG}>
            <Menu auth={'Выйти'} exitClickHandler={exitClickHandler}/>
            <div className={classes.container}>
                <div className={classes.addPageWrapper}>
                    <h2 className={classes.title}>Добавление нового контакта</h2>
                    <Grid container justifyContent="center">
                        <Grid item xs={10}>
                            <form onSubmit={onSubmit}>
                                <FormControl className={classes.form}>
                                    <FormGroup className={classes.row}>
                                        <div>
                                            <div className={classes.period}>
                                                <div>
                                                    <TextField className={classes.input}
                                                               label="Имя"
                                                               name={"name"}
                                                               type="search"
                                                               onChange={changeContactInfoHandler}
                                                    />
                                                    {errors.name ?
                                                        <div className={classes.error}>{errors.name}</div> : null}
                                                </div>
                                                <div>
                                                    <TextField className={classes.input}
                                                               label="Фамилия"
                                                               name={"surname"}
                                                               type="search"
                                                               onChange={changeContactInfoHandler}
                                                    />
                                                    {errors.surname ?
                                                        <div className={classes.error}>{errors.surname}</div> : null}
                                                </div>
                                                <div>
                                                    <TextField className={classes.input}
                                                               label="Отчество"
                                                               name={"patronymic"}
                                                               type="search"
                                                               onChange={changeContactInfoHandler}
                                                    />
                                                    {errors.patronymic ?
                                                        <div className={classes.error}>{errors.patronymic}</div> : null}
                                                </div>

                                                {/*<TextField className={classes.input}*/}
                                                {/*           label="Пол"*/}
                                                {/*           name={"gender"}*/}
                                                {/*           type="search"*/}
                                                {/*           onChange={changeContactInfoHandler}*/}
                                                {/*/>*/}

                                                <FormControl className={classes.gender}>
                                                    <InputLabel id="demo-simple-select-label">Пол</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={gender}
                                                        onChange={ChangeGender}
                                                    >
                                                        <MenuItem value={''}/>
                                                        <MenuItem value={'мужской'}>Мужской</MenuItem>
                                                        <MenuItem value={'женский'}>Женский</MenuItem>
                                                    </Select>
                                                </FormControl>


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
                                                <div className={classes.addressWrapper}>
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

                                        </div>
                                        <div className={classes.buttonWrapper}>

                                            <NavLink to={'/contacts'} className={classes.prevButton}>
                                                <Button
                                                    className={classes.editButton}
                                                    variant={'contained'}
                                                    color={'primary'}
                                                >Назад</Button>
                                            </NavLink>
                                            <Button
                                                className={classes.editButton}
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
        </div>
    );
};

export default AddPage;
