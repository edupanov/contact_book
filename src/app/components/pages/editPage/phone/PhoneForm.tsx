import React, {useState} from 'react';
import {DataGrid, GridColDef} from "@material-ui/data-grid";
import './phone.module.scss'
import {makeStyles} from "@material-ui/styles";
import {IconButton} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import {Delete} from "@material-ui/icons";
import PhoneEditModal from "./PhoneEditModal";

const useStyles = makeStyles({
    root: {
        display: 'none'
    }
})

const PhoneForm = () => {

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };


    const columns: GridColDef[] = [
        {field: 'phone', headerName: 'телефонный номер', width: 200, filterable: false, sortable: false},
        {field: 'description', headerName: 'Описание', width: 160, filterable: false, sortable: false},
        {field: 'comment', headerName: 'Коментарий', width: 160, filterable: false, sortable: false, flex: 1},
        {
            field: 'edit', headerName: '', width: 100, filterable: false, sortable: false, editable: true,
            renderCell: (el) => {
                return <IconButton
                    aria-label="edit"
                    id={String(el.id)}
                    onClick={handleOpenModal}

                >
                    <NavLink to={'/contacts/edit'}>
                        <EditIcon/>
                    </NavLink>
                </IconButton>
            }
        },
        {
            field: 'del', headerName: '', width: 100, filterable: false, sortable: false,
            renderCell: (el) =>
                <IconButton
                    aria-label="del"
                    id={String(el.id)}

                >
                    <Delete/>
                </IconButton>
        },
    ]

    const rows = [
        { id: 1, phone: '+375295268574', description: 'блабла', comment: 'bla bla bla' },
        { id: 2, phone: '+375258962415', description: 'блабла', comment: 'bla bla bla' },
        ]

    return (
        <div style={{ height: 162, width: '80%' }}>
            <h2>Контактные телефоны</h2>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={3}
                checkboxSelection
                disableSelectionOnClick
                hideFooter
            />
            <PhoneEditModal open={open} onClose={handleCloseModal}/>
        </div>
    );
};

export default PhoneForm;
