import React, {ChangeEvent, FC, useState} from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {useActions} from "../../store/hooks/useActions";
import style from './searchUser.module.scss'

type TargetType = {
    name: string
    value: string
}

const SearchPanel: FC = () => {

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

    console.log(search)

    return (
        <div className={style.searchPanel}

        >
            <Grid
                container justify="center"
            >
                <Grid item xs={10}>
                    <form onSubmit={onSubmit}>
                        <FormControl className={style.form}>
                            <FormGroup className={style.row}>
                                <div>
                                    <TextField className={style.input}
                                               label="Имя"
                                               name={"name"}
                                               type="search"
                                               onChange={changeHandler}
                                    />
                                    <TextField className={style.input}
                                               label="Фамилия"
                                               name={"surname"}
                                               type="search"
                                               onChange={changeHandler}
                                    />
                                    <TextField className={style.input}
                                               label="Отчество"
                                               name={"patronymic"}
                                               type="search"
                                               onChange={changeHandler}
                                    />
                                    <div className={style.addressWrapper}>
                                        <span className={style.address}>Возраст</span>
                                        <TextField className={style.input}
                                                   helperText="С"
                                                   name={"dateFrom"}
                                                   type="date"
                                                   onChange={changeHandler}
                                        />
                                        <TextField className={style.input}
                                                   helperText="По"
                                                   name={"dateTo"}
                                                   type="date"
                                                   onChange={changeHandler}
                                        />
                                    </div>

                                    <TextField className={style.input}
                                               label="Пол"
                                               name={"gender"}
                                               type="search"
                                               onChange={changeHandler}
                                    />
                                    <TextField className={style.input}
                                               label="Семейное положение"
                                               name={"family"}
                                               type="search"
                                               onChange={changeHandler}
                                    />
                                    <TextField className={style.input}
                                               label="Гражданство"
                                               name={"nationality"}
                                               type="search"
                                               onChange={changeHandler}
                                    />
                                    <div className={style.addressWrapper}>
                                        <span className={style.address}>Адрес</span>
                                        <br/><TextField className={style.input}
                                                        label="Страна"
                                                        name={"country"}
                                                        type="search"
                                                        onChange={changeHandler}
                                    />
                                        <TextField className={style.input}
                                                   label="Город"
                                                   name={"city"}
                                                   type="search"
                                                   onChange={changeHandler}
                                        />
                                        <TextField className={style.input}
                                                   label="Улица"
                                                   name={"street"}
                                                   type="search"
                                                   onChange={changeHandler}
                                        />
                                        <TextField className={style.input}
                                                   label="Номер дома"
                                                   name={"building"}
                                                   type="number"
                                                   onChange={changeHandler}
                                        />
                                        <TextField className={style.input}
                                                   label="Номер квартиры"
                                                   name={"flat"}
                                                   type="number"
                                                   onChange={changeHandler}
                                        />
                                        <TextField className={style.input}
                                                   label="Индекс"
                                                   name={"zipCode"}
                                                   type="number"

                                                   onChange={changeHandler}
                                        />
                                    </div>

                                </div>
                                <div>
                                    <Button type={'submit'} variant={'contained'} color={'primary'}
                                            className={style.searchButton}>Поиск</Button>
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
