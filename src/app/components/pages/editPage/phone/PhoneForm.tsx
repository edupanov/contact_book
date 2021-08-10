import React, {SyntheticEvent, useState} from 'react';
import {DataGrid, GridCellParams, GridColDef, GridRowId} from "@material-ui/data-grid";
import './styles/phone.module.scss'
import {Button, IconButton} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import {Delete} from "@material-ui/icons";
import {ContactInterface, PhoneInterface} from "../../../contactList/types/contact.interface";
import {ModalForEditForm} from "../../../../shared/components/ModalForEditForm";
import {EditPhoneForm} from "./EditPhoneForm";
import {AddPhoneForm} from "./AddPhoneForm";
import {useActions} from "../../../../store/hooks/useActions";
import {useStyles} from "../styles/formStyles";

interface PhoneFormProps {
    contact: ContactInterface
}

const PhoneForm = (props: PhoneFormProps) => {

    const classes = useStyles()

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
                    onClick={changePhoneHandler}
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
                    id={String(el.id)}
                    onClick={deleteCurrentPhone}
                >
                    <Delete/>
                </IconButton>
        },
    ]

    const {contact} = props
    let phones = contact.phones

    const {deletePhone} = useActions()
    const [open, setOpen] = useState(false);
    const [phone, setPhone] = useState({} as PhoneInterface); //edit phone
    const [selectionModel, setSelectionModel] = useState<GridRowId[]>([]);
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<JSX.Element>(<div/>);
    const [buttons] = useState<JSX.Element>(<div/>);

    const handleCloseModal = () => {
        setOpen(false);
    };


// EDIT PHONE HANDLER
    const changePhoneHandler = (event: SyntheticEvent) => {
        const targetID = event.currentTarget.id
        const currentPhone = contact.phones.find(target => target.id === targetID)!;
        setPhone(currentPhone)
        setTitle('Редактирование номера телефона');
        setBody(<EditPhoneForm phone={currentPhone} setOpen={setOpen} contact={contact}/>)
        setOpen(true);
    }

  // ADD PHONE HANDLER
    const addPhoneChangeHandler = (event: SyntheticEvent) => {
        setTitle('Добавить номер телефона');
        setBody(<AddPhoneForm setOpen={setOpen} contact={contact}/>)
        setOpen(true);
    }

    const checkedCurrenPhone = (params: GridRowId[]) => {
        setSelectionModel(params)
    }

    const deleteCurrentPhone = (event: SyntheticEvent) => {
        const phoneId = event.currentTarget.id
        const contactId = contact.id
        deletePhone(contactId, phoneId)
    }


    return (
        <div style={{height: 'auto', width: '100%'}}>
            <h2>Контактные телефоны</h2>
            <Button
                className={classes.button}
                variant="outlined"
                color="primary"
                onClick={addPhoneChangeHandler}
            >
                Добавить новый номер
            </Button>
            <DataGrid
                rows={phones! || []}
                columns={columns}
                autoHeight
                disableSelectionOnClick
                hideFooter
                checkboxSelection
                onSelectionModelChange={checkedCurrenPhone}
                selectionModel={selectionModel}
            />

            <ModalForEditForm
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