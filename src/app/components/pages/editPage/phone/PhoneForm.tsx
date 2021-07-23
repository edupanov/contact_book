import React, {SyntheticEvent, useState} from 'react';
import {DataGrid, GridCloseIcon, GridColDef, GridRowId} from "@material-ui/data-grid";
import './phone.module.scss'
import {makeStyles} from "@material-ui/styles";
import {IconButton} from "@material-ui/core";
import {NavLink, useHistory} from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import {Delete} from "@material-ui/icons";
import PhoneEditModal from "./PhoneEditModal";
import {PATH} from "../../../../routes/Routes";

const useStyles = makeStyles({
    root: {
        display: 'none'
    }
})

export interface PhoneInterface {
    id: string,
    phone: string,
    description: string,
    comment: string
}

type PhoneFormType = {
    phoneCloseClickHandler: () => void
}

const PhoneForm = (props: PhoneFormType) => {
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
        {field: 'phone', headerName: 'телефонный номер', width: 200, filterable: false, sortable: false},
        {field: 'description', headerName: 'Описание', width: 160, filterable: false, sortable: false},
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

    const rows = [
        {id: '1', phone: '+375295268574', description: 'блабла', comment: 'bla bla bla'},
        {id: '2', phone: '+375258962415', description: 'блабла', comment: 'bla bla bla'},
    ]
    const contactClickHandler = (event: SyntheticEvent) => {
        const targetID = event.currentTarget.id
        const phonesForUpdate = [...rows]
        const currentPhone = phonesForUpdate.find(target => target.id === targetID) || {} as PhoneInterface;
        setPhone(currentPhone)

    }

    const checkedCurrenPhone = (params: GridRowId[]) => {
        setSelectionModel(params)
    }

    return (
        <div style={{height: 162, width: '80%'}}>
            <h2>Контактные телефоны</h2>
            <IconButton
                onClick={props.phoneCloseClickHandler}
                aria-label="close">
                <GridCloseIcon/>
            </IconButton>
            <DataGrid
                rows={rows}
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
