import React from 'react';
import {Button, CircularProgress, FormControl, FormGroup, FormLabel, Grid, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import {useTypeSelector} from "../../../../store/hooks/useTypeSelector";
import {useActions} from "../../../../store/hooks/useActions";
import {Redirect} from "react-router";
import {useStyles} from "./loginStyles";

type FormikErrorType = {
    email?: string
    password?: string
}
type LoginFormType = {
    openLoginFormClickHandler: () => void
}

const LoginForm = (props: LoginFormType) => {
    const styles = useStyles()
    const {isLoading, data} = useTypeSelector(state => state.login)
    const {getLogin} = useActions()

    function deepEqual(obj1: any, obj2: any) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }

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

    // useEffect(() => {
    //     getLogin(data.email, data.password)
    //     console.log(formik.values)
    // }, [])

    if (isLoading || !data) {
        return <CircularProgress color="secondary"/>
    }
    const formikValues = formik.values
    const defaultValues = {email: "test@test.test", password: "11112"}
    const result = deepEqual(formikValues, defaultValues)
    if (result) {
        return <Redirect to={'/contacts'}/>
    }


    return (
        <div>
            <Grid container justifyContent="center">
                <Grid item xs={12}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormLabel>
                                <p>or use common test account credentials:</p>
                                <p>Email: test@test.test</p>
                                <p>Password: 11112</p>
                            </FormLabel>
                            <FormGroup>
                                <div className={styles.inputWrapper}>
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
                                </div>

                                {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                                <div className={styles.buttonWrapper}>
                                    <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                                    <Button variant={'contained'} color={'primary'}
                                            onClick={props.openLoginFormClickHandler}>Cancel</Button>
                                </div>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default LoginForm;