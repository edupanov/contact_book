import React from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {useFormik} from "formik";

type FormikErrorType = {
    name?: string
    surname?: string
    password?: string
}

const LoginForm: React.FC = () => {


    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            password: '',
        },
        validate: (values) => {

            const errors: FormikErrorType = {};

            if (!values.name) {
                errors.name = 'Required';
            }

            if (!values.surname) {
                errors.surname = 'Required';
            }

            if (!values.password) {
                errors.password = 'Password is required';
            }

            return errors;
        },
        onSubmit: values => console.log(values)

    })


    return (
        <div>
            <Grid container justify="center">
                <Grid item xs={4}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormGroup>
                                <TextField
                                    label="Name"
                                    margin="normal"
                                    {...formik.getFieldProps("name")}
                                />
                                {formik.errors.name ? <div>{formik.errors.name}</div> : null}
                                <TextField
                                    label="Surname"
                                    margin="normal"
                                    {...formik.getFieldProps("surname")}
                                />
                                {formik.errors.surname ? <div>{formik.errors.surname}</div> : null}
                                <TextField
                                    type="password"
                                    label="Password"
                                    margin="normal"
                                    {...formik.getFieldProps("password")}
                                />
                                {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                                <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default LoginForm;