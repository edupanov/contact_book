import TextField from '@material-ui/core/TextField';
import React from 'react';
import {FormControl, InputLabel, NativeSelect} from "@material-ui/core";
import {useStyles} from "./styles/emailStyles";
import {ContactInterface} from "../../contactList/types/contact.interface";

const messageTemplate = {
    template1: 'Пусть хорошее случается,\n' +
        'Пусть приходят чудеса,\n' +
        'И мечты все исполняются.\n' +
        'С Новым годом всех! Ура!\n' +
        '\n',
    template2: 'Тебе желаю море счастья,\n' +
        'Улыбок, солнца и тепла.\n' +
        'Чтоб жизнь была еще прекрасней,\n' +
        'Удача за руку вела!\n' +
        '\n' +
        'Пусть в доме будет только радость,\n' +
        'Уют, достаток и покой.\n' +
        'Друзья, родные будут рядом,\n' +
        'Беда обходит стороной!\n' +
        '\n' +
        'Здоровья крепкого желаю\n' +
        'И легких жизненных дорог.\n' +
        'И пусть всегда, благословляя,\n' +
        'Тебя хранит твой ангелок!\n' +
        '\n',
    template3: 'Поздравляю с днем рождения! Пусть жизнь дарит тебе побольше ярких моментов и сбудутся все твои самые смелые и заветные желания! Желаю, чтобы в твоем доме всегда царили счастье и понимание. И пусть тебя окружают только искренние, верные, надежные друзья и добрые люди!\n',
}

const EmailPage = () => {

    const contactsId = JSON.parse(sessionStorage.getItem('contactsId') || '[]');
    const contacts = JSON.parse(sessionStorage.getItem('contacts') || '[]');

    function findEqualObjects(someArray: any, otherArray: any) {
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

    const valueContact = currentContacts.map(el => `${el.name} ${el.surname}`).join(', ')

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
    // if (state.name === '') {
    //
    // }
    return (
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
                        <option value={messageTemplate.template1}>Шаблон1</option>
                    </optgroup>
                    <optgroup label="С днем Рождения!">
                        <option value={messageTemplate.template2}>Шаблон2</option>
                        <option value={messageTemplate.template3}>Шаблон3</option>
                    </optgroup>
                </NativeSelect>
            </FormControl>
            <TextField className={classes.inputStyle}
                       id="outlined-textarea"
                       label="Текст сообщения"
                       multiline
                       variant="outlined"
                       defaultValue={state.name}
                       autoFocus
            />

        </form>
    );
};

export default EmailPage;
