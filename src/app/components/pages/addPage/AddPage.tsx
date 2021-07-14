import React, {ChangeEvent, useState} from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {useActions} from "../../../store/hooks/useActions";
import {useStyles} from "../editPage/styles/editContactStyles";
import {TargetType} from "../searchPage/SearchPage";

const AddPage = () => {

    const [add, setAdd] = useState({})


    const classes = useStyles()

    const {addContact} = useActions()

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)

        const dateFrom = target.name === 'dateFrom'
        const dateTo = target.name === 'dateTo'
        const isDate = dateFrom || dateTo


        const replaceStr = event.target.value.replace(/-/g, ' ').split(' ').reverse().join('.')
        //
        // setSearch({
        //     ...search,
        //     [dateFrom ? 'dateFrom' :
        //         dateTo ? 'dateTo' :
        //             target.name]: isDate ? replaceStr : target.value,
        // })
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
                                    />
                                    <TextField className={classes.input}
                                               label="Фамилия"
                                               name={"surname"}
                                               type="search"
                                    />
                                    <TextField className={classes.input}
                                               label="Отчество"
                                               name={"patronymic"}
                                               type="search"
                                    />
                                    <TextField className={classes.date}
                                               helperText="Дата рождения"
                                               name={"birthDate"}
                                               type="date"
                                    />
                                    <TextField className={classes.input}
                                               label="Пол"
                                               name={"gender"}
                                               type="search"
                                    />
                                    <TextField className={classes.input}
                                               label="Семейное положение"
                                               name={"maritalStatus"}
                                               type="search"
                                    />
                                    <TextField className={classes.input}
                                               label="Гражданство"
                                               name={"nationality"}
                                               type="search"
                                    />
                                    <TextField className={classes.input}
                                               label="Текущее место работы"
                                               name={"job"}
                                    />
                                    <TextField className={classes.input}
                                               label="Web site"
                                               name={"webSite"}
                                               type="search"
                                    />
                                    <TextField className={classes.input}
                                               label="Email"
                                               name={"email"}
                                               type="search"
                                    />
                                    <div>
                                        <h3 className={classes.title}>Адрес</h3>
                                        <br/><TextField className={classes.input}
                                                        label="Страна"
                                                        name={"country"}
                                                        type="search"
                                    />
                                        <TextField className={classes.input}
                                                   label="Город"
                                                   name={"city"}
                                                   type="search"
                                        />
                                        <TextField className={classes.input}
                                                   label="Улица"
                                                   name={"street"}
                                                   type="search"
                                        />
                                        <TextField className={classes.input}
                                                   label="Номер дома"
                                                   name={"building"}
                                                   type="number"
                                        />
                                        <TextField className={classes.input}
                                                   label="Номер квартиры"
                                                   name={"flat"}
                                                   type="number"
                                        />
                                        <TextField className={classes.input}
                                                   label="Индекс"
                                                   name={"zipCode"}
                                                   type="number"
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