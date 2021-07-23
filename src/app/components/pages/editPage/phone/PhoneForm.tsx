import React, {SyntheticEvent, useState} from 'react';
import {DataGrid, GridCellParams, GridCloseIcon, GridColDef, GridRowId} from "@material-ui/data-grid";
import './phone.module.scss'
import {IconButton} from "@material-ui/core";
import {useHistory, useLocation} from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import {Delete} from "@material-ui/icons";
import PhoneEditModal from "./PhoneEditModal";
import {PATH} from "../../../../routes/Routes";
import {PhoneInterface} from "../../../contactList/types/contact.interface";
import {LocationType} from "../type/editPage.type";


type PhoneFormType = {
    phoneCloseClickHandler: () => void
}

const PhoneForm = (props: PhoneFormType) => {

    const location = useLocation<LocationType>()
    const data = location.state.contact.phones
    const history = useHistory()

    const [open, setOpen] = useState(false);
    const [phone, setPhone] = useState({} as PhoneInterface || '');
    const [selectionModel, setSelectionModel] = useState<GridRowId[]>([]);

    const handleOpenModal = (e: any) => {
        contactClickHandler(e)
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
        history.push(PATH.EDIT)
    };


    const columns: GridColDef[] = [
        {field: 'phone', headerName: 'Телефонный номер', width: 200, filterable: false, sortable: false,
            renderCell: (params: GridCellParams) => {
                return <span>{`${params.row.countryCode} ${params.row.operatorID} ${params.row.phoneNumber}`}</span>
            }
        },

        {field: 'countryCode', headerName: 'Код страны', width: 200, filterable: false, sortable: false, hide: true},
        {field: 'operatorID', headerName: 'Код оператора', width: 200, filterable: false, sortable: false, hide: true},
        {field: 'phoneNumber', headerName: 'телефонный номер', width: 200, filterable: false, sortable: false, hide: true},

        {field: 'phoneType', headerName: 'Описание', width: 160, filterable: false, sortable: false},
        {field: 'comment', headerName: 'Коментарий', width: 160, filterable: false, sortable: false, flex: 1},
        {
            field: 'edit', headerName: '', width: 100, filterable: false, sortable: false, editable: true,
            renderCell: (el) => {
                return <IconButton
                    id={String(el.id)}
                    aria-label="edit"
                    onClick={handleOpenModal}
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

    const contactClickHandler = (event: SyntheticEvent) => {
        const targetID = event.currentTarget.id
        const phonesForUpdate = [...data]
        const currentPhone = phonesForUpdate.find(target => target.id === targetID) || {} as PhoneInterface;
        setPhone(currentPhone)

    }

    const checkedCurrenPhone = (params: GridRowId[]) => {
        setSelectionModel(params)
    }

    return (
        <div style={{height: 162, width: '100%', marginBottom: 30}}>
            <h2>Контактные телефоны</h2>
            <IconButton
                onClick={props.phoneCloseClickHandler}
                aria-label="close">
                <GridCloseIcon/>
            </IconButton>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={3}
                disableSelectionOnClick
                hideFooter
                checkboxSelection
                onSelectionModelChange={checkedCurrenPhone}
                selectionModel={selectionModel}
            />
            <PhoneEditModal open={open} onClose={handleCloseModal} phone={phone}/>
        </div>
    );
};

export default PhoneForm;
