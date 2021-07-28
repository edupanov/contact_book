import React, {SyntheticEvent, useEffect, useState} from 'react';
import {DataGrid, GridCellParams, GridColDef, GridRowId} from "@material-ui/data-grid";
import './phone.module.scss'
import {Button, IconButton} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import {Delete} from "@material-ui/icons";
import {PhoneInterface} from "../../../contactList/types/contact.interface";
import {PhoneFormProps} from "../type/editPage.type";
import {PhoneModal} from "./PhoneModal";
import {EditPhoneForm} from "./editForm/EditPhoneForm";
import {ButtonsEditForm} from "./editForm/ButtonsEditForm";
import {AddPhoneForm} from "./addForm/AddPhoneForm";
import {useActions} from "../../../../store/hooks/useActions";
import {useStyles} from "../styles/formStyles";

const PhoneForm = (props: PhoneFormProps) => {

    const classes = useStyles()

    const {addPhone} = useActions()

    const columns: GridColDef[] = [
        {
            field: 'phone', headerName: 'Телефонный номер', width: 200, filterable: false, sortable: false,
            renderCell: (params: GridCellParams) => {
                return <span>{`${params.row.countryCode} ${params.row.operatorID} ${params.row.phoneNumber}`}</span>
            }
        },
        {field: 'countryCode', headerName: 'Код страны', width: 200, filterable: false, sortable: false, hide: true},
        {field: 'operatorID', headerName: 'Код оператора', width: 200, filterable: false, sortable: false, hide: true},
        {
            field: 'phoneNumber',
            headerName: 'телефонный номер',
            width: 200,
            filterable: false,
            sortable: false,
            hide: true
        },
        {field: 'phoneType', headerName: 'Описание', width: 160, filterable: false, sortable: false},
        {field: 'comment', headerName: 'Коментарий', width: 160, filterable: false, sortable: false, flex: 1},
        {
            field: 'edit', headerName: '', width: 100, filterable: false, sortable: false, editable: true,
            renderCell: (el) => {
                return <IconButton
                    id={String(el.id)}
                    aria-label="edit"
                    onClick={contactClickHandler}
                >
                    <EditIcon/>
                </IconButton>
            }
        },
        {
            field: 'del', headerName: '', width: 100, filterable: false, sortable: false,
            renderCell: (el) =>
                <IconButton
                    aria-label="del"
                >
                    <Delete/>
                </IconButton>
        },
    ]

    const {setContact, contact} = props

    let data = contact.phones

    const [open, setOpen] = useState(false);
    const [phone, setPhone] = useState({} as PhoneInterface);
    const [newPhone, setNewPhone] = useState({} as PhoneInterface);
    const [selectionModel, setSelectionModel] = useState<GridRowId[]>([]);
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<JSX.Element>(<div/>);
    const [buttons, setButtons] = useState<JSX.Element>(<div/>);

    const handleCloseModal = () => {
        setOpen(false);
    };

    const contactClickHandler = (event: SyntheticEvent) => {
        const targetID = event.currentTarget.id
        const currentPhone = data.find(target => target.id === targetID)!;
        setPhone(currentPhone)
        setTitle('Редактирование номера телефона');
        setBody(<EditPhoneForm phone={currentPhone} setPhone={setPhone}/>)
        setButtons(<ButtonsEditForm onSubmitModal={() => onSubmitModal()}/>)
        setOpen(true);
    }

    const addPhoneClickHandler = (event: SyntheticEvent) => {
        setTitle('Добавить номер телефона');
        setBody(<AddPhoneForm newPhone={newPhone} setNewPhone={setNewPhone}/>)
        setButtons(<ButtonsEditForm onSubmitModal={() => onAddPhoneSubmit()}/>)
        setOpen(true);
    }

    const onSubmitModal = () => {
        const savedPhone: PhoneInterface = JSON.parse(sessionStorage.getItem('phone') || '{}');
        setContact(savedPhone, 'phones')
        handleCloseModal()
    }

    const onAddPhoneSubmit = () => {
        const savedPhone: PhoneInterface = JSON.parse(sessionStorage.getItem('newPhone') || '{}');

        addPhone(savedPhone, props.contact!.id)
        setOpen(false);
    }

    const checkedCurrenPhone = (params: GridRowId[]) => {
        setSelectionModel(params)
    }

    useEffect(() => {
        data = [...data, newPhone]
    }, [phone])

    return (
        <div style={{height: 'auto', width: '100%'}}>
            <h2>Контактные телефоны</h2>
            <Button
                className={classes.button}
                variant="outlined"
                color="primary"
                onClick={addPhoneClickHandler}

            >
                Добавить новый номер
            </Button>
            <DataGrid
                rows={data}
                columns={columns}
                autoHeight
                disableSelectionOnClick
                hideFooter
                checkboxSelection
                onSelectionModelChange={checkedCurrenPhone}
                selectionModel={selectionModel}
            />

            <PhoneModal
                open={open}
                onClose={handleCloseModal}
                title={title}
                body={body}
                buttons={buttons}
            />
        </div>
    );
};

export default PhoneForm;


