import React, {ChangeEvent, FC, useState} from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {useActions} from "../../store/hooks/useActions";
import style from './searchUser.module.scss'

type FormikErrorType = {}

type TargetType = {
    name: string
    value: string
}

const SearchPanel: FC = () => {

    const {getContacts, setSearchParams, setPage} = useActions()

    const [search, setSearch] = useState({})

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)

        setSearch({
            ...search,
            [target.name]: target.value
        })
    }

    const onSubmit = () => {
        setPage(1)
        setSearchParams(search)
        getContacts()
    }


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
                                               onChange={changeHandler}
                                    />
                                    <TextField className={style.input}
                                               label="Фамилия"
                                               name={"surname"}
                                               onChange={changeHandler}
                                    />
                                    <TextField className={style.input}
                                               label="Отчество"
                                               name={"patronymic"}
                                               onChange={changeHandler}
                                    />
                                    <TextField className={style.input}
                                               label="Дата рождения"
                                               name={"birthDate"}
                                               onChange={changeHandler}
                                    />
                                    <TextField className={style.input}
                                               label="Пол"
                                               name={"gender"}
                                               onChange={changeHandler}
                                    />
                                    <TextField className={style.input}
                                               label="Семейное положение"
                                               name={"family"}
                                               onChange={changeHandler}
                                    />
                                    <TextField className={style.input}
                                               label="Гражданство"
                                               name={"nationality"}
                                               onChange={changeHandler}
                                    />
                                    <TextField className={style.input}
                                               label="Адрес"
                                               name={"address"}
                                               onChange={changeHandler}
                                    />
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