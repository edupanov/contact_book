import React, {ChangeEvent, useState} from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {useActions} from "../../../store/hooks/useActions";
import {useStyles} from "../editPage/styles/editContactStyles";
import {TargetType} from "../searchPage/SearchPage";

const AddPage = () => {

    const [add, setAdd] = useState({})


    const classes = useStyles()

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)


        setAdd({
            ...add,
            [target.name]: target.value,
        })
    }

    const onSubmit = () => {

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
                                                onChange={changeHandler}
                                    />
                                    <TextField className={classes.input}
                                               label="Фамилия"
                                               name={"surname"}
                                               type="search"
                                                onChange={changeHandler}
                                    />
                                    <TextField className={classes.input}
                                               label="Отчество"
                                               name={"patronymic"}
                                               type="search"
                                                onChange={changeHandler}
                                    />
                                    <TextField className={classes.date}
                                               helperText="Дата рождения"
                                               name={"birthDate"}
                                               type="date"
                                                onChange={changeHandler}
                                    />
                                    <TextField className={classes.input}
                                               label="Пол"
                                               name={"gender"}
                                               type="search"
                                                onChange={changeHandler}
                                    />
                                    <TextField className={classes.input}
                                               label="Семейное положение"
                                               name={"maritalStatus"}
                                               type="search"
                                                onChange={changeHandler}
                                    />
                                    <TextField className={classes.input}
                                               label="Гражданство"
                                               name={"nationality"}
                                               type="search"
                                                onChange={changeHandler}
                                    />
                                    <TextField className={classes.input}
                                               label="Текущее место работы"
                                               name={"job"}
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
                                    />
                                        <TextField className={classes.input}
                                                   label="Город"
                                                   name={"city"}
                                                   type="search"
                                                    onChange={changeHandler}
                                        />
                                        <TextField className={classes.input}
                                                   label="Улица"
                                                   name={"street"}
                                                   type="search"
                                                    onChange={changeHandler}
                                        />
                                        <TextField className={classes.input}
                                                   label="Номер дома"
                                                   name={"building"}
                                                   type="number"
                                                    onChange={changeHandler}
                                        />
                                        <TextField className={classes.input}
                                                   label="Номер квартиры"
                                                   name={"flat"}
                                                   type="number"
                                                    onChange={changeHandler}
                                        />
                                        <TextField className={classes.input}
                                                   label="Индекс"
                                                   name={"zipCode"}
                                                   type="number"
                                                    onChange={changeHandler}
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

export default AddPage;