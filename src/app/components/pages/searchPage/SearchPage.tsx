import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {useActions} from "../../../store/hooks/useActions";
import {useStylesSearchPage} from "./styles/styles";
import {SearchParamsInterface} from "./types/searcParams.interface";
import {formatDate} from "../../../utils/utils";

export type TargetType = {
    name: string
    value: string
}

type SearchPanelType = {
    searchClickHandlerClose: () => void
}

const SearchPanel = (props: SearchPanelType) => {

    const classes = useStylesSearchPage()

    const {getContacts, setSearchParams, setPage} = useActions()

    const savedSearch = JSON.parse(sessionStorage.getItem('search') || '{}');
    const [search, setSearch] = useState(savedSearch || {} as SearchParamsInterface)

    const changeContactInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)
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
        <div className={classes.searchPanel}>
            <Grid container justifyContent="center">
                <Grid item xs={10} className={classes.searchWrapper}>
                    <form onSubmit={onSubmit}>
                        <FormControl className={classes.form}>
                            <FormGroup className={classes.row}>
                                <h2 className={classes.title}>Поиск контакта</h2>
                                <div className={classes.searchTable}>
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
                                            {/*<span className={classes.delInfoInput} onClick={onClickCleanInput}>x</span>*/}
                                            <TextField className={classes.date}
                                                       helperText="С"
                                                       name={"dateFrom"}
                                                       type="date"
                                                       onChange={changeContactInfoHandler}
                                                       defaultValue={search.dateFrom === '' ? '' : formatDate(savedSearch.dateFrom!, 'yyyy-MM-DD')}
                                            />
                                            {/*<span className={classes.delInfoInput} onClick={onClickCleanInput}>x</span>*/}
                                            <TextField className={classes.date}
                                                       helperText="По"
                                                       name={"dateTo"}
                                                       type="date"
                                                       onChange={changeContactInfoHandler}
                                                       defaultValue={formatDate(savedSearch.dateTo!, 'yyyy-MM-DD')}
                                            />
                                        </div>
                                    </div>
                                    <h3 className={classes.title}>Адрес</h3>
                                    <div className={classes.addressWrapper}>
                                        <TextField className={classes.input}
                                                   label="Страна"
                                                   name={"country"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.country}
                                        />
                                        <TextField className={classes.input}
                                                   label="Город"
                                                   name={"city"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.city}
                                        />
                                        <TextField className={classes.input}
                                                   label="Улица"
                                                   name={"street"}
                                                   type="search"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.street}

                                        />
                                        <TextField className={classes.input}
                                                   label="Номер дома"
                                                   name={"building"}
                                                   type="number"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.building}

                                        />
                                        <TextField className={classes.input}
                                                   label="Номер квартиры"
                                                   name={"flat"}
                                                   type="number"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.flat}
                                        />
                                        <TextField className={classes.input}
                                                   label="Индекс"
                                                   name={"zipCode"}
                                                   type="search"
                                                   placeholder={'6-ти значный номер'}
                                                   inputProps={{pattern: "[0-9]{6}"}}
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={savedSearch.zipCode}
                                        />
                                    </div>

                                </div>
                                <div className={classes.buttonWrapper}>

                                    <Button type={'submit'} variant={'contained'} color={'primary'}
                                            onClick={discharge}>Сбросить</Button>
                                    <Button type={'submit'} variant={'contained'} color={'primary'}
                                    >Поиск</Button>
                                    <Button type={'submit'} variant={'contained'} color={'primary'}
                                            onClick={props.searchClickHandlerClose}>Свернуть</Button>
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
