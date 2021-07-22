import React from 'react';
import {DataGrid, GridColDef} from "@material-ui/data-grid";
import './phone.module.scss'
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        display: 'none'
    }
})

const PhoneForm = () => {

    const classes = useStyles();


    const columns: GridColDef[] = [
        {field: 'phone', headerName: 'телефонный номер', width: 200, filterable: false, sortable: false},
        {field: 'description', headerName: 'Описание', width: 160, filterable: false, sortable: false},
        {field: 'comment', headerName: 'Коментарий', width: 160, filterable: false, sortable: false, flex: 1},
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
        </div>
    );
};

export default PhoneForm;