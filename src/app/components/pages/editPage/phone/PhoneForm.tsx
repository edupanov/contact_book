import React, {SyntheticEvent, useState} from 'react';
import {DataGrid, GridCellParams, GridColDef, GridRowId} from "@material-ui/data-grid";
import './phone.module.scss'
import {Button, IconButton} from "@material-ui/core";
import {useLocation} from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import {Delete} from "@material-ui/icons";
import {PhoneInterface} from "../../../contactList/types/contact.interface";
import {LocationType, PhoneFormProps} from "../type/editPage.type";
import {PhoneModal} from "./PhoneModal";
import {EditPhoneForm} from "./editForm/EditPhoneForm";
import {ButtonsEditForm} from "./editForm/ButtonsEditForm";

const PhoneForm = (props: PhoneFormProps) => {

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

    const {setContact} = props

    const location = useLocation<LocationType>()

    const data = location.state.contact.phones

    const [open, setOpen] = useState(false);
    const [phone, setPhone] = useState({} as PhoneInterface);
    const [selectionModel, setSelectionModel] = useState<GridRowId[]>([]);
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<JSX.Element>(<div/>);
    const [buttons, setButtons] = useState<JSX.Element>(<div/>);

    const handleCloseModal = () => {
        setOpen(false);
    };

    const contactClickHandler = (event: SyntheticEvent) => {
        const targetID = event.currentTarget.id
        const phonesForUpdate = Object.keys(phone).length === 0 ? [...data] : [phone]
        const currentPhone = phonesForUpdate.find(target => target.id === targetID) || {} as PhoneInterface;
        setPhone(currentPhone)
        setTitle('Редактирование номера телефона');
        setBody(<EditPhoneForm phone={currentPhone} setPhone={setPhone}/>)
        setButtons(<ButtonsEditForm onSubmitModal={() => onSubmitModal()}/>)
        setOpen(true);
    }

    // const handleOpenEditModal = () => {
    //
    //     console.log(phone)
    //     setTitle('Редактирование номера телефона');
    //     setBody(<EditPhoneForm  phone={phone} setPhone={setPhone}/>)
    //     setButtons(<ButtonsEditForm onSubmitModal={onSubmitModal}/>)
    //     setOpen(true);
    // };

    const onSubmitModal = () => {
        const savedPhone: PhoneInterface = JSON.parse(sessionStorage.getItem('phone') || '{}');
        setContact(savedPhone, 'phones')
        handleCloseModal()
    }

    const checkedCurrenPhone = (params: GridRowId[]) => {
        setSelectionModel(params)
    }

    return (
        <div style={{height: 162, width: '100%', marginBottom: 30}}>
            <h2>Контактные телефоны</h2>
            <Button
                variant="outlined"
                color="primary"
            >
                Добавить новый номер
            </Button>
            <DataGrid
                rows={Object.keys(phone).length === 0 ? data : [phone]}
                columns={columns}
                pageSize={3}
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


