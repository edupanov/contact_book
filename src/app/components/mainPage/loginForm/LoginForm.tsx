import React, {useEffect} from 'react';
import {Button, CircularProgress, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import {useTypeSelector} from "../../../store/hooks/useTypeSelector";
import {useActions} from "../../../store/hooks/useActions";
import {useParams} from "react-router";

type ParamsType= {
    email: string
    password: string
}

type FormikErrorType = {
    email?: string
    password?: string
}

const LoginForm: React.FC = () => {

    const {isLoading, data} = useTypeSelector(state => state.login )
    const{getLogin} = useActions()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (values) => {

            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Password is required';
            }
            return errors;
        },
        onSubmit: values => {
            getLogin(values.email, values.password)
        }

    })


    useEffect(() => {
        getLogin(data.email, data.password)
        console.log(formik.values)
    }, [])

    if (isLoading || !data) {
        return <CircularProgress color="secondary"/>
    }

       return (
        <div>
            <Grid container justify="center">
                <Grid item xs={4}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormGroup>
                                <TextField
                                    label="Email"
                                    margin="normal"
                                    {...formik.getFieldProps("email")}
                                />
                                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
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