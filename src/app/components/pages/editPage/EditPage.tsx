import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {Button, CircularProgress, FormControl, FormGroup, Grid, IconButton, TextField} from "@material-ui/core";
import {useActions} from "../../../store/hooks/useActions";
import {useStylesEditPAge} from "./styles/editContactStyles";
import {TargetType} from "../searchPage/SearchPage";
import {useHistory, useLocation} from "react-router-dom";
import Avatar from "./avatar/Avatar";
import PhoneForm from "./phone/PhoneForm";
import AttachmentsForm from "./attachments/AttachmentsForm";
import {LocationType} from "./type/editPage.type";
import {AttachmentInterface, ContactInterface} from "../../contactList/types/contact.interface";
import {useTypeSelector} from "../../../store/hooks/useTypeSelector";
import {RootState} from "../../../store/rootReducer";
import styles from "./styles/HeaderContactList.module.scss";
import Menu from "../../../shared/components/Menu";
import {PATH} from "../../../routes/Routes";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {KeyboardDatePicker} from "@material-ui/pickers";
import {formatDate} from "../../../utils/utils";

const EditPage = () => {
    const history = useHistory()
    const classes = useStylesEditPAge()
    const {updateContact, getContacts, logOut} = useActions()
    const contacts: ContactInterface[] = useTypeSelector((state: RootState) => state.contacts.data)
    const location = useLocation<LocationType>()
    const contactId = location.pathname.split('/').reverse()[0]
    const defaultContact = contacts?.find(el => el.id === contactId)!
    let [currentContact, setCurrentContact] = useState<ContactInterface>(defaultContact)
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(currentContact.birthDate),
    );

    useEffect(() => {
        const newContact: ContactInterface = contacts?.find(el => el.id === contactId)!
        setCurrentContact(newContact)
        if (!contacts) {
            getContacts()
        }
    }, [contacts])

    if (!contacts || !currentContact) {
        return <CircularProgress
            className={styles.preloader}
            size={60}
            color="secondary"
        />
    }

    const changeContactInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)
        const isDate = target.name === 'birthDate'
        const replaceStr = event.target.value.replace(/-/g, ' ').split(' ').reverse().join('.')
        if (currentContact) {
            const contact = {...currentContact, [target.name]: isDate ? replaceStr : target.value}
            setCurrentContact(contact)
        }
    }


    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };
    const changeContactAddressHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)

        const address = {
            ...currentContact,
            address: {...currentContact.address, id: currentContact.address.id, [target.name]: target.value}
        }
        setCurrentContact(address)
    }

    const exitClickHandler = () => {
        logOut()
    }

    let copyContact = JSON.parse(JSON.stringify(currentContact))
    const attachmentSubmit = copyContact.attachments.map((el: AttachmentInterface) => {
        if (el.base64File) {

            return {
                comment: el.comment,
                filePath: el.base64File,
                uploadDate: el.uploadDate,
                fileName: el.fileName,
                ext: el.ext
            }
        }

        return el
    })

    const phoneSubmit = copyContact.phones.map((el: any) => {
        if (el.id.includes('phone')) {
            return {
                comment: el.comment,
                countryCode: el.countryCode,
                operatorID: el.operatorID,
                phoneNumber: el.phoneNumber,
                phoneType: el.phoneType
            }
        }
        return el
    })
    const birthDate = formatDate(selectedDate, 'DD.MM.yyyy')
    const contactSubmit = {
        ...copyContact,
        phones: phoneSubmit,
        attachments: attachmentSubmit,
        birthDate: birthDate

    }
    const onSubmit = (event: FormEvent) => {
        event.preventDefault()
        updateContact({contact: contactSubmit})
        sessionStorage.clear()
    }
    return (
        <div className={classes.editBG}>
            <Menu auth={'Выйти'} exitClickHandler={exitClickHandler}/>
            <div className={classes.container}>
                <div className={classes.editForm}>
                    <IconButton className={classes.prevButton}
                                onClick={() => history.push(PATH.HOME)}
                                aria-label="close">
                        <ArrowBackIcon/>
                    </IconButton>
                    <div className={classes.avatar}><Avatar contact={currentContact}/></div>
                    <div>
                        <h2 className={classes.title}>Редактирование контакта </h2>
                        <Grid container justifyContent="center">
                            <Grid item xs={10}>
                                <form onSubmit={onSubmit}>
                                    <FormControl>
                                        <FormGroup>
                                            <div className={classes.wrapperInput}>
                                                <div className={classes.contactInfo}>
                                                    <TextField className={classes.input}
                                                               label="Имя"
                                                               name={"name"}
                                                               type="search"
                                                               onChange={changeContactInfoHandler}
                                                               defaultValue={currentContact.name ? currentContact.name : ''}
                                                    />
                                                    <TextField className={classes.input}
                                                               label="Фамилия"
                                                               name={"surname"}
                                                               type="search"
                                                               onChange={changeContactInfoHandler}
                                                               defaultValue={currentContact.surname ? currentContact.surname : ''}
                                                    />
                                                    <TextField className={classes.input}
                                                               label="Отчество"
                                                               name={"patronymic"}
                                                               type="search"
                                                               onChange={changeContactInfoHandler}
                                                               defaultValue={currentContact.patronymic ? currentContact.patronymic : ''}
                                                    />
                                                    <KeyboardDatePicker
                                                        className={classes.date}
                                                        margin="normal"
                                                        id="date-picker-dialog"
                                                        format="dd.MM.yyyy"
                                                        label="Дата рождения"
                                                        value={selectedDate}
                                                        onChange={handleDateChange}
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change date',
                                                        }}
                                                        error={false}
                                                    />
                                                    <TextField className={classes.input}
                                                               label="Пол"
                                                               name={"gender"}
                                                               type="search"
                                                               onChange={changeContactInfoHandler}
                                                               defaultValue={currentContact.gender ? currentContact.gender : ''}
                                                    />
                                                    <TextField className={classes.input}
                                                               label="Семейное положение"
                                                               name={"maritalStatus"}
                                                               type="search"
                                                               onChange={changeContactInfoHandler}
                                                               defaultValue={currentContact.maritalStatus ? currentContact.maritalStatus : ''}
                                                    />
                                                    <TextField className={classes.input}
                                                               label="Гражданство"
                                                               name={"nationality"}
                                                               type="search"
                                                               onChange={changeContactInfoHandler}
                                                               defaultValue={currentContact.nationality ? currentContact.nationality : ''}
                                                    />
                                                    <TextField className={classes.input}
                                                               label="Email"
                                                               name={"email"}
                                                               type="search"
                                                               onChange={changeContactInfoHandler}
                                                               defaultValue={currentContact.email ? currentContact.email : ''}
                                                    />
                                                    <TextField className={classes.input}
                                                               label="Место работы"
                                                               name={"currentJob"}
                                                               type="search"
                                                               onChange={changeContactInfoHandler}
                                                               defaultValue={currentContact.currentJob ? currentContact.currentJob : ''}
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className={classes.title}>Адрес</h3>
                                                    <br/>
                                                    <div className={classes.contactInfo}>
                                                        <TextField className={classes.input}
                                                                   label="Страна"
                                                                   name={"country"}
                                                                   type="search"
                                                                   onChange={changeContactAddressHandler}
                                                                   defaultValue={currentContact.address?.country ? currentContact.address?.country : ''}
                                                        />
                                                        <TextField className={classes.input}
                                                                   label="Город"
                                                                   name={"city"}
                                                                   type="search"
                                                                   onChange={changeContactAddressHandler}
                                                                   defaultValue={currentContact.address?.city ? currentContact.address?.city : ''}
                                                        />
                                                        <TextField className={classes.input}
                                                                   label="Улица"
                                                                   name={"street"}
                                                                   type="search"
                                                                   onChange={changeContactAddressHandler}
                                                                   defaultValue={currentContact.address?.street ? currentContact.address?.street : ''}
                                                        />
                                                        <TextField className={classes.input}
                                                                   label="Номер дома"
                                                                   name={"building"}
                                                                   type="number"
                                                                   onChange={changeContactAddressHandler}
                                                                   defaultValue={currentContact.address?.building ? currentContact.address?.building : ''}
                                                        />
                                                        <TextField className={classes.input}
                                                                   label="Номер квартиры"
                                                                   name={"flat"}
                                                                   type="number"
                                                                   onChange={changeContactAddressHandler}
                                                                   defaultValue={currentContact.address?.flat ? currentContact.address?.flat : ''}
                                                        />
                                                        <TextField className={classes.input}
                                                                   label="Индекс"
                                                                   name={"zipCode"}
                                                                   type="number"
                                                                   onChange={changeContactAddressHandler}
                                                                   defaultValue={currentContact.address?.zipCode ? currentContact.address?.zipCode : ''}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <PhoneForm contact={currentContact}/>
                                            <AttachmentsForm contact={currentContact}/>

                                            <div className={classes.submitButton}>
                                                <Button
                                                    className={classes.editButton}
                                                    type={'submit'}
                                                    variant={'contained'}
                                                    color={'primary'}
                                                >Сохранить изменения</Button>
                                            </div>
                                        </FormGroup>
                                    </FormControl>
                                </form>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default EditPage;
