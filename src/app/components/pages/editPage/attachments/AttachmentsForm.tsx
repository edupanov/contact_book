import React, {SyntheticEvent, useState} from 'react';
import {DataGrid, GridColDef, GridRowId} from "@material-ui/data-grid";
import {Button, IconButton} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import {Delete} from "@material-ui/icons";
import {AttachmentInterface, ContactInterface} from "../../../contactList/types/contact.interface";
import {PhoneModal} from "../phone/PhoneModal";
import {AddAttachmentForm} from "./AddAttachmentForm";
import {EditAttachmentForm} from "./EditAttachmentForm";

type AttachmentsPropsType = {
    setAttachments: (data: any, tableName: string) => void
    contact: ContactInterface
}

const AttachmentsForm = (props: AttachmentsPropsType) => {
    const {contact} = props

    const columns: GridColDef[] = [
        {field: 'file', headerName: 'Имя файла', width: 200, filterable: false, sortable: false,},
        {field: 'date', headerName: 'Дата Загрузки', width: 160, filterable: false, sortable: false},
        {field: 'comment', headerName: 'Коментарий', width: 160, filterable: false, sortable: false},
        {
            field: 'edit', headerName: '', width: 100, filterable: false, sortable: false, editable: true,
            renderCell: (el) => {
                return <IconButton
                    id={String(el.id)}
                    aria-label="edit"
                    onClick={editAttachmentChangeHandler}
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

    const [open, setOpen] = useState(false);
    const [selectionModel, setSelectionModel] = useState<GridRowId[]>([]);
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<JSX.Element>(<div/>);
    const [buttons, setButtons] = useState<JSX.Element>(<div/>);

    const addAttachmentChangeHandler = () => {
        setTitle('Добавить вложения');
        setBody(<AddAttachmentForm setOpen={setOpen} contact={contact}/>)
        setOpen(true);
    }

    const editAttachmentChangeHandler = (event: SyntheticEvent) => {
        setTitle('Редактирование вложений');
        setOpen(true);
        const targetID = event.currentTarget.id
        const currentAttachment = contact.attachments.find(target => target.id === targetID) || {} as AttachmentInterface;
        setBody(<EditAttachmentForm setOpen={setOpen} contact={contact} attachment={currentAttachment}/>)
    }

    const checkedCurrenAttachment = (params: GridRowId[]) => {
        setSelectionModel(params)
    }

    const handleCloseModal = () => {
        setOpen(false);
    };


    return (
        <div style={{height: 162, width: '100%', marginBottom: 40, marginTop: 30}}>
            <h2>Вложения</h2>
            <Button
                variant="outlined"
                color="primary"
                onClick={addAttachmentChangeHandler}
            >
                Добавить вложение
            </Button>

            <DataGrid
                rows={contact.attachments! || []}
                columns={columns}
                autoHeight
                disableSelectionOnClick
                hideFooter
                checkboxSelection
                onSelectionModelChange={checkedCurrenAttachment}
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

export default AttachmentsForm;
