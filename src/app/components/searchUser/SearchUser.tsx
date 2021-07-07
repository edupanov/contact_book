import React from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import {useActions} from "../../store/hooks/useActions";
import style from './searchUser.module.scss'

type FormikErrorType = {}

const SearchPanel: React.FC = () => {

    const {getContacts, setSearchParams, setPage} = useActions()

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            patronymic: '',
            birthday: '',
            gender: '',
            maritalStatus: '',
            nationality: '',
            // address: {
            //     country: '',
            //     city: '',
            //     street: '',
            //     zipCode: ''
            // }
        },
        validate: (values) => {

            const errors: FormikErrorType = {};
            return errors;
        },
        onSubmit: values => {
            setPage(1)
            setSearchParams(values)
            getContacts()
        }
    })

    // if (isLoading || !data) {
    //     return <CircularProgress color="secondary"/>
    // }

    return (
        <div className={style.searchPanel}>
            <Grid className={style.qwe}
                container justify="center"
            >
                <Grid item xs={10} >
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormGroup>
                                <TextField
                                    label="name"
                                    margin="normal"
                                    {...formik.getFieldProps("name")}
                                />
                                <TextField
                                    label="surname"
                                    margin="normal"
                                    {...formik.getFieldProps("surname")}
                                />
                                <TextField
                                    label="patronymic"
                                    margin="normal"
                                    {...formik.getFieldProps("patronymic")}
                                />
                                {/*<TextField*/}
                                {/*    label="birthday"*/}
                                {/*    margin="normal"*/}
                                {/*    {...formik.getFieldProps("birthday")}*/}
                                {/*/>*/}
                                {/*<TextField*/}
                                {/*    label="gender"*/}
                                {/*    margin="normal"*/}
                                {/*    {...formik.getFieldProps("gender")}*/}
                                {/*/>*/}
                                {/*<TextField*/}
                                {/*    label="maritalStatus"*/}
                                {/*    margin="normal"*/}
                                {/*    {...formik.getFieldProps("maritalStatus")}*/}
                                {/*/>*/}
                                {/*<TextField*/}
                                {/*    label="nationality"*/}
                                {/*    margin="normal"*/}
                                {/*    {...formik.getFieldProps("nationality")}*/}
                                {/*/>*/}
                                {/*<TextField*/}
                                {/*    label="address"*/}
                                {/*    margin="normal"*/}
                                {/*    {...formik.getFieldProps("address")}*/}
                                {/*/>*/}
                                <Button type={'submit'} variant={'contained'} color={'primary'}>Поиск</Button>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default SearchPanel;