import TextField from '@material-ui/core/TextField';
import React from 'react';
import {FormControl, InputLabel, NativeSelect} from "@material-ui/core";
import {useStyles} from "./styles/emailStyles";

const EmailPage = () => {

    const classes = useStyles();
    const [state, setState] = React.useState<{ age: string | number; name: string }>({
        age: '',
        name: '',
    });

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const name = event.target.name as keyof typeof state;
        setState({
            ...state,
            [name]: event.target.value,
        });
        console.log(event.target.value)
    };
    return (
        <form noValidate autoComplete="off" className={classes.emailFormWrapper}>
            <TextField className={classes.inputStyle}
                id="outlined-read-only-input"
                label="Checked contacts"
                defaultValue=""
                InputProps={{
                    readOnly: true,
                }}
                variant="outlined"
            />
            <TextField className={classes.inputStyle}
                required
                id="outlined-required"
                label="Тема"
                variant="outlined"
            />
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="name-native-error">Шаблон</InputLabel>
                <NativeSelect
                    value={state.name}
                    onChange={handleChange}
                    name="name"
                    inputProps={{
                        id: 'name-native-error',
                    }}
                >
                    <option aria-label="None" value="" />
                    <optgroup label="С Новым Годом!">
                        <option value="Шаблон111">Шаблон1</option>
                    </optgroup>
                    <optgroup label="С днем Рождения!">
                        <option value="Шаблон222">Шаблон2</option>
                        <option value="Шаблон333">Шаблон3</option>
                    </optgroup>
                </NativeSelect>
            </FormControl>
            <TextField className={classes.inputStyle}
                id="outlined-textarea"
                label="Текст сообщения"
                multiline
                variant="outlined"
            />

        </form>
    );
};

export default EmailPage;