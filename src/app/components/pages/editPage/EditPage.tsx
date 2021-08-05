import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {Button, CircularProgress, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {useActions} from "../../../store/hooks/useActions";
import {useStyles} from "./styles/editContactStyles";
import {TargetType} from "../searchPage/SearchPage";
import {useLocation} from "react-router-dom";
import Avatar from "./avatar/Avatar";
import PhoneForm from "./phone/PhoneForm";
import AttachmentsForm from "./attachments/AttachmentsForm";
import {LocationType} from "./type/editPage.type";
import {
    AttachmentInterface,
    AvatarInterface,
    ContactInterface,
    PhoneInterface
} from "../../contactList/types/contact.interface";
import {useTypeSelector} from "../../../store/hooks/useTypeSelector";
import {RootState} from "../../../store/rootReducer";
import styles from "./styles/HeaderContactList.module.scss";

const EditPage = () => {

    const classes = useStyles()
    const {updateContact, getContacts} = useActions()
    const contacts: ContactInterface[] = useTypeSelector((state: RootState) => state.contacts.data)
    const location = useLocation<LocationType>()
    const contactId = location.pathname.split('/').reverse()[0]
    const defaultContact = contacts?.find(el => el.id === contactId)!
    let [currentContact, setCurrentContact] = useState<ContactInterface>(defaultContact)

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
            currentContact = {...currentContact, [target.name]: isDate ? replaceStr : target.value}
        }
    }
    const changeContactAddressHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)
        currentContact = {
            ...currentContact,
            address: {...currentContact.address, id: currentContact.address.id, [target.name]: target.value}
        }
    }

    const setPhone = (data: PhoneInterface, tableName: string) => {
        let updatedPhones: PhoneInterface[] = currentContact.phones
        updatedPhones = updatedPhones.filter(phone => phone.id !== data.id)
        updatedPhones = [...updatedPhones, data]
        currentContact = {...currentContact, [tableName]: updatedPhones}
    }

    const setAvatar = (file: string, name: string) => {
        const newLogo: AvatarInterface = {
            file: file,
            name: name
        }
        currentContact = {...currentContact, logo: newLogo}
    }

    const setAttachments = (data: AttachmentInterface, tableName: string) => {
        let updatedAttachments: AttachmentInterface[] = currentContact.attachments
        updatedAttachments = updatedAttachments.filter(attachment => attachment.id !== data.id)
        updatedAttachments = [...updatedAttachments, data]
        currentContact = {...currentContact, [tableName]: updatedAttachments}
    }


    const onSubmit = (event: FormEvent) => {
        event.preventDefault()
        updateContact({contact: currentContact})
        sessionStorage.clear()
    }

    return (
        <div className={classes.editForm}>
            <div className={classes.avatar}><Avatar setAvatar={setAvatar}/></div>
            <div>
                <h2 className={classes.title}>Редактирование контакта </h2>
                <Grid container justifyContent="center">
                    <Grid item xs={10}>
                        <form onSubmit={onSubmit}>
                            <FormControl>
                                <FormGroup>
                                    <div className={classes.wrapperInput}>
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
                                        <TextField className={classes.date}
                                                   helperText="Дата рождения"
                                                   name={"birthDate"}
                                                   type="date"
                                                   onChange={changeContactInfoHandler}
                                                   defaultValue={currentContact.birthDate ? currentContact.birthDate.split('.').reverse().join('-') : ''}
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
                                        <div>
                                            <h3 className={classes.title}>Адрес</h3>
                                            <br/><TextField className={classes.input}
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

                                    <PhoneForm contact={currentContact}/>
                                    <AttachmentsForm contact={currentContact}/>

                                    <div className={classes.submitButton}>
                                        <Button
                                            className={classes.button}
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

    );
};

export default EditPage;
