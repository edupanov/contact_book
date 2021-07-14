import React, {ChangeEvent, FC, useState} from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {useActions} from "../../../store/hooks/useActions";
import {useStyles} from "../editPage/styles/editContactStyles";

export type TargetType = {
    name: string
    value: string
}
// убрать очищение формы при submit
const SearchPanel: FC = () => {
    const classes = useStyles()

    const {getContacts, setSearchParams, setPage} = useActions()

    const [search, setSearch] = useState({})

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)

        const dateFrom = target.name === 'dateFrom'
        const dateTo = target.name === 'dateTo'
        const isDate = dateFrom || dateTo


        const replaceStr = event.target.value.replace(/-/g, ' ').split(' ').reverse().join('.')

        setSearch({
            ...search,
            [dateFrom ? 'dateFrom' :
                dateTo ? 'dateTo' :
                    target.name]: isDate ? replaceStr : target.value,
        })
    }
    const onSubmit = () => {
        setPage(1)
        setSearchParams(search)
        getContacts()
    }

    return (
        <div className={classes.searchPanel}>
            <h2 className={classes.title}>Поиск контакта</h2>
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
                                    </div>
                                    <div className={classes.dateWrapper}>
                                        <div>
                                            <h3 className={classes.title}>Возраст</h3>
                                        </div>
                                        <div className={classes.period}>
                                            <TextField className={classes.date}
                                                       helperText="С"
                                                       name={"dateFrom"}
                                                       type="date"
                                                       onChange={changeHandler}
                                            />
                                            <TextField className={classes.date}
                                                       helperText="По"
                                                       name={"dateTo"}
                                                       type="date"
                                                       onChange={changeHandler}
                                            />
                                        </div>
                                    </div>
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
                                    <Button type={'submit'} variant={'contained'} color={'primary'}
                                            className={classes.button}>Поиск</Button>
                                </div>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default SearchPanel;
