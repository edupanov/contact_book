import React from 'react';
import {Button, FormControl, FormGroup, FormLabel, Grid, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import {useActions} from "../../../../store/hooks/useActions";
import {useStyles} from "./loginStyles";
import {FormikErrorType} from "../../../../validation/types/formikErrorType";
import {Redirect} from 'react-router';
import {getContactsBirthday} from "../../../contactList/store/actionCreators/contactActionCreators";


type LoginFormType = {
    openLoginFormClickHandler: () => void
}

const LoginForm = (props: LoginFormType) => {
    const styles = useStyles()

    const {getContactsBirthday} = useActions()

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
            getContactsBirthday(values.email, values.password)
            formik.resetForm()
        }
    })

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
                                    {formik.errors.email ? <div className={styles.errorForm}>{formik.errors.email}</div> : null}
                                    <TextField
                                        type="password"
                                        label="Password"
                                        margin="normal"
                                        {...formik.getFieldProps("password")}
                                    />
                                </div>

                                {formik.errors.password ? <div className={styles.errorForm}>{formik.errors.password}</div> : null}
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