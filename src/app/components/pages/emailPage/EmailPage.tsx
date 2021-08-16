import TextField from '@material-ui/core/TextField';
import React, {ChangeEvent, useState} from 'react';
import {Button, FormControl, IconButton, InputLabel, NativeSelect} from "@material-ui/core";
import {useStyles} from "./styles/emailStyles";
import {ContactInterface} from "../../contactList/types/contact.interface";
import {TargetType} from "../searchPage/SearchPage";
import {EmailInterface} from "./types/email.interface";
import {useActions} from "../../../store/hooks/useActions";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory} from "react-router-dom";
import {PATH} from "../../../routes/Routes";
import {messageTemplate} from "./messageTemplates";
import Menu from "../../../shared/components/Menu";

const EmailPage = () => {
    const history = useHistory()
    const classes = useStyles();

    const {sendMail, logOut} = useActions()
    let [email, setEmail] = useState({} as EmailInterface)
    const contactsId = JSON.parse(sessionStorage.getItem('contactsId') || '[]');
    const contacts = JSON.parse(sessionStorage.getItem('contacts') || '[]');
    const [template, setTemplate] = React.useState<{ name: string }>({name: ''});
    console.log(email)

    const findEqualObjects = (someArray: any, otherArray: any) => {
        let equalObjects: ContactInterface[] = [];
        someArray.forEach((i: ContactInterface) => {
            otherArray.forEach((j: string) => {
                if (i.id === j) {
                    equalObjects.push(i);
                }
            });
        });

        return equalObjects;
    }
    const currentContacts = findEqualObjects(contacts, contactsId)
    // имена выбранных пользователей для поля кому
    const valueContact = currentContacts.map(el => `${el.name} ${el.surname}`).join(', ')
    // email выбранных пользователей
    const emails = currentContacts.map(el => `${el.email}`)

    const handleChange = (event: React.ChangeEvent<{ name: string; value: unknown }>) => {
        const text = event.target.name;
        setTemplate({
            ...template,
            [text]: event.target.value,
        });
        // @ts-ignore
        setEmail({...email, text: event.target.value})
    };
    const changeMailHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)
        if (email) {
            email = {...email, [target.name]: target.value}
        }
        setTemplate({...template, name: target.value})
        setEmail(email)
    }

    const sendMailHandler = () => {
        sendMail(emails, email.theme, email.text)
    }

    const exitClickHandler = () => {
        logOut()
    }

    return (
        <div className={classes.emailWrapper}>
            <Menu auth={'Выйти'} exitClickHandler={exitClickHandler}/>
            <div className={classes.container}>
                <IconButton
                    onClick={() => history.push(PATH.HOME)}
                    aria-label="close">
                    <ArrowBackIcon/>
                </IconButton>
                <form noValidate autoComplete="off" className={classes.emailFormWrapper}>
                    <TextField className={classes.inputStyle}
                               id="outlined-textarea"
                               label="Кому"
                               multiline
                               variant="outlined"
                               defaultValue={valueContact}
                               InputProps={{
                                   readOnly: true,
                               }}
                    />
                    <TextField className={classes.inputStyle}
                               required
                               id="outlined-required"
                               label="Тема"
                               name={'theme'}
                               variant="outlined"
                               onChange={changeMailHandler}

                    />
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="name-native-error" className={classes.titleTemplate}>Шаблон</InputLabel>
                        <NativeSelect
                            className={classes.select}
                            value={template.name}
                            onChange={handleChange}
                            name="name"
                            inputProps={{
                                id: 'name-native-error',
                            }}
                        >
                            <option aria-label="None" value=""/>
                            <optgroup label="С Новым Годом!">
                                <option value={messageTemplate.template1}>Шаблон1</option>
                            </optgroup>
                            <optgroup label="С днем Рождения!">
                                <option value={messageTemplate.template2}>Шаблон2</option>
                                <option value={messageTemplate.template3}>Шаблон3</option>
                            </optgroup>
                        </NativeSelect>
                    </FormControl>
                    <TextField className={classes.inputStyle}
                               autoFocus
                               id="outlined-textarea"
                               label={template.name !== '' ? '' : "Текст сообщения"}
                               name={'text'}
                               multiline
                               variant="outlined"
                               onChange={changeMailHandler}
                               value={email.text}
                    />
                    <Button
                        className={classes.emailButton}
                        variant="outlined"
                        color="primary"
                        onClick={sendMailHandler}
                    >
                        Отправить e-mail
                    </Button>

                </form>
            </div>
        </div>
    );
};

export default EmailPage;