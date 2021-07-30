import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Button, FormControl, FormGroup, Grid, IconButton, TextField} from "@material-ui/core";
import {useActions} from "../../../store/hooks/useActions";
import {useStyles} from "../editPage/styles/editContactStyles";
import {SearchParamsInterface} from "./types/searcParams.interface";
import {GridCloseIcon} from "@material-ui/data-grid";
import {formatDate} from "../../../utils/utils";

export type TargetType = {
    name: string
    value: string
}

type SearchPanelType = {
    searchClickHandlerClose: () => void
}
const SearchPanel = (props: SearchPanelType) => {

    const classes = useStyles()

    const {getContacts, setSearchParams, setPage} = useActions()

    const savedSearch: SearchParamsInterface = JSON.parse(sessionStorage.getItem('search') || '{}');
    const [search, setSearch] = useState(savedSearch || {} as SearchParamsInterface)
    const changeContactInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)
        console.log(target.name)
        // if(target.name === 'email') {
        //     target.value = ``
        // }
        const isDate = target.name === 'dateFrom' || target.name === 'dateTo'
        let replaceStr
        if (isDate && target.value.length === 10) {
            replaceStr = formatDate(target.value, 'DD.MM.yyyy')
        }

        setSearch({
            ...search,
            [target.name]: isDate ? replaceStr : target.value,
        })
    }

    const changeContactAddressHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)
        setSearch({
            ...search,
            address: {...search.address, [target.name]: target.value}
        })
    }

    const onSubmit = (event: FormEvent) => {
        event.preventDefault()
        sessionStorage.setItem('search', JSON.stringify(search));
        setPage(1)
        setSearchParams(search)
        getContacts()
    }

    const discharge = () => {
        sessionStorage.clear()
        setSearch({})
    }

    return (
        <div
            className={classes.searchPanel}>
            <h2 className={classes.title}>Поиск контакта</h2>
            <IconButton
                className={classes.close}
                onClick={props.searchClickHandlerClose}
                aria-label="close">
                <GridCloseIcon/>
            </IconButton>
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
                                                   defaultValue={savedSearch.name}
                                        />
                                        <TextField className={classes.input}
                                                   label="Фамилия"
                                                   name={"surname"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.surname}
                                        />
                                        <TextField className={classes.input}
                                                   label="Отчество"
                                                   name={"patronymic"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.patronymic}
                                        />

                                        <TextField className={classes.input}

                                                   label="Пол"
                                                   name={"gender"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.gender}
                                        />
                                        <TextField className={classes.input}
                                                   label="Семейное положение"
                                                   name={"maritalStatus"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.maritalStatus}
                                        />
                                        <TextField className={classes.input}
                                                   label="Гражданство"
                                                   name={"nationality"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.nationality}
                                        />
                                        <TextField className={classes.input}
                                                   label="Email"
                                                   name={"email"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.email}
                                        />
                                        <TextField className={classes.input}
                                                   label="Место работы"
                                                   name={"currentJob"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.currentJob}
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
                                                       defaultValue={formatDate(savedSearch.dateFrom!, 'yyyy-MM-DD')}
                                            />
                                            <TextField className={classes.date}
                                                       helperText="По"
                                                       name={"dateTo"}
                                                       type="date"
                                                       onChange={changeContactInfoHandler}
                                                       defaultValue={formatDate(savedSearch.dateTo!, 'yyyy-MM-DD')}
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
                                                        defaultValue={savedSearch.address?.country}
                                    />
                                        <TextField className={classes.input}
                                                   label="Город"
                                                   name={"city"}
                                                   type="search"
                                                   onChange={changeContactAddressHandler}
                                                   defaultValue={savedSearch.address?.city}
                                        />
                                        <TextField className={classes.input}
                                                   label="Улица"
                                                   name={"street"}
                                                   type="search"
                                                   onChange={changeContactAddressHandler}
                                                   defaultValue={savedSearch.address?.street}

                                        />
                                        <TextField className={classes.input}
                                                   label="Номер дома"
                                                   name={"building"}
                                                   type="number"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.address?.building}

                                        />
                                        <TextField className={classes.input}
                                                   label="Номер квартиры"
                                                   name={"flat"}
                                                   type="number"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.address?.flat}
                                        />
                                        <TextField className={classes.input}
                                                   label="Индекс"
                                                   name={"zipCode"}
                                                   type="search"
                                                   placeholder={'6-ти значный номер'}
                                                   inputProps={{pattern: "[0-9]{6}"}}
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.address?.zipCode}
                                        />
                                    </div>

                                </div>
                                <div>
                                    <Button type={'submit'} variant={'contained'} color={'primary'}
                                            className={classes.button}>Поиск</Button>
                                    <Button type={'submit'} variant={'contained'} color={'primary'}
                                            className={classes.button} onClick={discharge}>Сбросить</Button>

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
