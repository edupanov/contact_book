import React from 'react';
import {Button, FormControl, FormGroup, FormLabel, Grid, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import {useActions} from "../../../../store/hooks/useActions";
import {useStyles} from "./loginStyles";
import {LoginErrorType} from "../../../../validation/types/LoginErrorType";
import {getContactsBirthday} from "../../../contactList/store/actionCreators/contactActionCreators";
import {useTypeSelector} from "../../../../store/hooks/useTypeSelector";
import {Redirect} from "react-router";


type LoginFormType = {
    openLoginFormClickHandler: () => void
}

const LoginForm = (props: LoginFormType) => {
    const styles = useStyles()

    const {getContactsBirthday, getLogin} = useActions()

    const isSuccess = useTypeSelector(state => state.login.isSuccess)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (values) => {

            const errors: LoginErrorType = {};
            if (!values.email) {
                errors.email = 'Email is required';
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
            formik.resetForm()
        }
    })

    if (isSuccess) {
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
                                    {formik.errors.email ?
                                        <div className={styles.errorForm}>{formik.errors.email}</div> : null}
                                    <TextField
                                        type="password"
                                        label="Password"
                                        margin="normal"
                                        {...formik.getFieldProps("password")}
                                    />
                                </div>

                                {formik.errors.password ?
                                    <div className={styles.errorForm}>{formik.errors.password}</div> : null}
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