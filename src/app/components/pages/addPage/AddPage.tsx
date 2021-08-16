import React, {ChangeEvent, FC, useState} from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
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

    const exitClickHandler = () => {
        logOut()
    }

    const onSubmit = () => {
        const contact = {
            contact: {
                ...contactInfo,
                address: contactAddress
            }
        }
        addContact(contact)
        history.push(PATH.HOME)
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
                                            <Button
                                                className={classes.editButton}
                                                type={'submit'}
                                                variant={'contained'}
                                                color={'primary'}
                                            >Сохранить изменения</Button>
                                            <NavLink to={'/contacts'} className={classes.prevButton}>
                                                <Button
                                                    className={classes.editButton}
                                                    variant={'contained'}
                                                    color={'primary'}
                                                >Назад</Button>
                                            </NavLink>

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
