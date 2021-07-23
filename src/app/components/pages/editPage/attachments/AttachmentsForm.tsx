import React, {SyntheticEvent, useState} from 'react';
import {DataGrid, GridCloseIcon, GridColDef, GridRowId} from "@material-ui/data-grid";
import {IconButton} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import {Delete} from "@material-ui/icons";
import {PhoneInterface} from "../../../contactList/types/contact.interface";

type AttachmentsFormType = {
    close: () => void
}

const AttachmentsForm = (props: AttachmentsFormType) => {
    const history = useHistory()

    const [selectionModel, setSelectionModel] = useState<GridRowId[]>([]);

    const columns: GridColDef[] = [
        {field: 'fileName', headerName: 'Имя файла', width: 200, filterable: false, sortable: false},
        {field: 'description', headerName: 'Описание', width: 160, filterable: false, sortable: false},
        {field: 'comment', headerName: 'Коментарий', width: 160, filterable: false, sortable: false, flex: 1},
        {
            field: 'edit', headerName: '', width: 100, filterable: false, sortable: false, editable: true,
            renderCell: (el) => {
                return <IconButton
                    id={String(el.id)}
                    aria-label="edit"
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
        {id: '1', fileName: '...', description: 'блабла', comment: 'bla bla bla'},
        {id: '2', fileName: '...', description: 'блабла', comment: 'bla bla bla'},
    ]
    const contactClickHandler = (event: SyntheticEvent) => {
        const targetID = event.currentTarget.id
        const phonesForUpdate = [...rows]
        const currentPhone = phonesForUpdate.find(target => target.id === targetID) || {} as PhoneInterface;


    }

    const checkedCurrenPhone = (params: GridRowId[]) => {
        setSelectionModel(params)
    }

    return (
        <div style={{height: 162, width: '80%', marginBottom: 30, marginTop: 30}}>
            <h2>Вложения</h2>
            <IconButton
                onClick={props.close}
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
        </div>
    );
};

export default AttachmentsForm;
