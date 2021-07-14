import React from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {useActions} from "../../../store/hooks/useActions";
import {useStyles} from "./styles/editContactStyles";
import {ContactInterface} from "../../contactList/types/contact.interface";
import {addContact} from "./store/actionCreators/editContactActionCreator";

type CreateContactType = {
    item: ContactInterface  ,
    setItem: Function
}

const EditPage = (props: CreateContactType) => {

    const {item, setItem} = props

    const classes = useStyles()

    const {addContact} = useActions()

    const onSubmit = () => {
        addContact(item)
    }

    if (Object.keys(item).length === 0) {
        return <p className={classes.errorTitle}>Выберите пользователя из списка</p>
    }

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
                                               onChange={(e) => setItem({...item, name: e.target.value })}
                                               value={item.name ? item.name : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Фамилия"
                                               name={"surname"}
                                               type="search"
                                               onChange={(e) => setItem({...item, surname: e.target.value })}
                                               value={item.surname ? item.surname : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Отчество"
                                               name={"patronymic"}
                                               type="search"
                                               onChange={(e) => setItem({...item, patronymic: e.target.value })}
                                               value={item.patronymic ? item.patronymic : ''}
                                    />
                                    <TextField className={classes.date}
                                               helperText="Дата рождения"
                                               name={"birthDate"}
                                               type="date"
                                               onChange={(e) => setItem({...item, birthDate: e.target.value })}
                                               value={item.birthDate ? item.birthDate : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Пол"
                                               name={"gender"}
                                               type="search"
                                               onChange={(e) => setItem({...item, gender: e.target.value })}
                                               value={item.gender ? item.gender : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Семейное положение"
                                               name={"maritalStatus"}
                                               type="search"
                                               onChange={(e) => setItem({...item, maritalStatus: e.target.value })}
                                               value={item.maritalStatus ? item.maritalStatus : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Гражданство"
                                               name={"nationality"}
                                               type="search"
                                               onChange={(e) => setItem({...item, nationality: e.target.value })}
                                               value={item.nationality ? item.nationality : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Текущее место работы"
                                               name={"job"}
                                               type="search"
                                               onChange={(e) => setItem({...item, job: e.target.value })}

                                    />
                                    <TextField className={classes.input}
                                               label="Web site"
                                               name={"webSite"}
                                               type="search"
                                               onChange={(e) => setItem({...item, webSite: e.target.value })}
                                    />
                                    <TextField className={classes.input}
                                               label="Email"
                                               name={"email"}
                                               type="search"
                                               onChange={(e) => setItem({...item, email: e.target.value })}
                                    />
                                    <div>
                                        <h3 className={classes.title}>Адрес</h3>
                                        <br/><TextField className={classes.input}
                                                        label="Страна"
                                                        name={"country"}
                                                        type="search"
                                                        onChange={(e) => setItem({...item, address:{...item.address, country: e.target.value} })}
                                                        value={item.address.country ? item.address.country : ''}
                                    />
                                        <TextField className={classes.input}
                                                   label="Город"
                                                   name={"city"}
                                                   type="search"
                                                   onChange={(e) => setItem({...item, address:{...item.address, city: e.target.value} })}
                                                   value={item.address.city! ? item.address.city : ''}
                                        />
                                        <TextField className={classes.input}
                                                   label="Улица"
                                                   name={"street"}
                                                   type="search"
                                                   onChange={(e) => setItem({...item, address:{...item.address, street: e.target.value} })}
                                                   value={item.address.street ? item.address.street : ''}
                                        />
                                        <TextField className={classes.input}
                                                   label="Номер дома"
                                                   name={"building"}
                                                   type="number"
                                                   onChange={(e) => setItem({...item, address:{...item.address, building: e.target.value} })}
                                                   value={item.address.building ? item.address.building : ''}
                                        />
                                        <TextField className={classes.input}
                                                   label="Номер квартиры"
                                                   name={"flat"}
                                                   type="number"
                                                   onChange={(e) => setItem({...item, address:{...item.address, flat: e.target.value} })}
                                                   value={item.address.flat ? item.address.flat : ''}
                                        />
                                        <TextField className={classes.input}
                                                   label="Индекс"
                                                   name={"zipCode"}
                                                   type="number"
                                                   onChange={(e) => setItem({...item, address:{...item.address, zipCode: e.target.value} })}
                                                   value={item.address.zipCode ? item.address.zipCode : ''}
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