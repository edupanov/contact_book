import React, {ChangeEvent, FC, useState} from 'react';
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

    const [errors, setError] = useState({
        name: '',
        surname: '',
        patronymic: '',
    })

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
        addContact(contact)
        history.push(PATH.HOME)
    }

    const validation = (event: React.FocusEvent<HTMLInputElement>) => {
        const target = event.target
        const regexRange = /^[а-яА-Яб,0-9]{3,10}$/;
        if (target.name === 'name') {
            if(!regexRange.test(target.value)) {
                setError({...errors, name: 'Поле запонено неверно'})
            }else if (regexRange.test(target.value)) {
                setError({...errors, name: ''})
            }
        }
        if (target.name === 'surname') {
            if(!regexRange.test(target.value)) {
                setError({...errors, surname: 'Поле запонено неверно'})
            }else if (regexRange.test(target.value)) {
                setError({...errors, surname: ''})
            }
        }
        if (target.name === 'patronymic') {
            if(!regexRange.test(target.value)) {
                setError({...errors, patronymic: 'Поле запонено неверно'})
            }else if (regexRange.test(target.value)) {
                setError({...errors, patronymic: ''})
            }
        }
        return errors
    }
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
                                                               title={'Используйте русский язык и цифры'}
                                                               label="Имя"
                                                               name={"name"}
                                                               type="search"
                                                               onBlur={validation}
                                                               onChange={changeContactInfoHandler}
                                                    />
                                                    {errors.name ?
                                                        <div className={classes.error}>{errors.name}</div> : null}
                                                </div>
                                                <div>
                                                    <TextField className={classes.input}
                                                               title={'Используйте русский язык и цифры'}
                                                               label="Фамилия"
                                                               name={"surname"}
                                                               type="search"
                                                               onBlur={validation}
                                                               onChange={changeContactInfoHandler}
                                                    />
                                                    {errors.surname ?
                                                        <div className={classes.error}>{errors.surname}</div> : null}
                                                </div>
                                                <div>
                                                    <TextField className={classes.input}
                                                               title={'Используйте русский язык и цифры'}
                                                               label="Отчество"
                                                               name={"patronymic"}
                                                               type="search"
                                                               onBlur={validation}
                                                               onChange={changeContactInfoHandler}
                                                    />
                                                    {errors.patronymic ?
                                                        <div className={classes.error}>{errors.patronymic}</div> : null}
                                                </div>
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
