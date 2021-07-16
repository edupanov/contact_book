import React, {ChangeEvent, FC, FormEvent, useEffect, useState} from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {useActions} from "../../../store/hooks/useActions";
import {useStyles} from "../editPage/styles/editContactStyles";
import {SearchParamsInterface} from "./types/searcParams.interface";

export type TargetType = {
    name: string
    value: string
}
// убрать очищение формы при submit
const SearchPanel: FC = () => {


    const classes = useStyles()

    const {getContacts, setSearchParams, setPage} = useActions()

    const savedSearch: SearchParamsInterface = JSON.parse(sessionStorage.getItem('search') || '{}');
    const [search, setSearch] = useState(savedSearch || {} as SearchParamsInterface)
console.log(savedSearch)

    const changeContactInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
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
    const changeContactAddressHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)
        setSearch({
            ...search,
            address: {...search.address, [target.name]: target.value}
        })
    }

    const onSubmit = (event: FormEvent<EventTarget>) => {
        sessionStorage.setItem('search', JSON.stringify(search));
        event.preventDefault()
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
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.name || search.name}
                                        />
                                        <TextField className={classes.input}
                                                   label="Фамилия"
                                                   name={"surname"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.surname || search.surname}
                                        />
                                        <TextField className={classes.input}
                                                   label="Отчество"
                                                   name={"patronymic"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.patronymic || search.patronymic}
                                        />
                                        <TextField className={classes.input}
                                                   label="Пол"
                                                   name={"gender"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.gender || search.gender}
                                        />
                                        <TextField className={classes.input}
                                                   label="Семейное положение"
                                                   name={"maritalStatus"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.maritalStatus || search.maritalStatus}
                                        />
                                        <TextField className={classes.input}
                                                   label="Гражданство"
                                                   name={"nationality"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.nationality || search.nationality}
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
                                                       onChange={changeContactInfoHandler}
                                                       defaultValue={savedSearch.dateFrom || search.dateFrom}
                                            />
                                            <TextField className={classes.date}
                                                       helperText="По"
                                                       name={"dateTo"}
                                                       type="date"
                                                       onChange={changeContactInfoHandler}
                                                       defaultValue={savedSearch.dateTo || search.dateTo}
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
                                                        defaultValue={savedSearch.address?.country || search.address?.country}
                                    />
                                        <TextField className={classes.input}
                                                   label="Город"
                                                   name={"city"}
                                                   type="search"
                                                   onChange={changeContactAddressHandler}
                                                   defaultValue={savedSearch.address?.city || search.address?.city}
                                        />
                                        <TextField className={classes.input}
                                                   label="Улица"
                                                   name={"street"}
                                                   type="search"
                                                   onChange={changeContactAddressHandler}
                                                   defaultValue={savedSearch.address?.street || search.address?.street}

                                        />
                                        <TextField className={classes.input}
                                                   label="Номер дома"
                                                   name={"building"}
                                                   type="number"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.address?.building || search.address?.building}

                                        />
                                        <TextField className={classes.input}
                                                   label="Номер квартиры"
                                                   name={"flat"}
                                                   type="number"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.address?.flat || search.address?.flat}
                                        />
                                        <TextField className={classes.input}
                                                   label="Индекс"
                                                   name={"zipCode"}
                                                   type="number"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.address?.zipCode || search.address?.zipCode}
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
