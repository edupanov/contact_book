import React, {SyntheticEvent, useEffect, useState} from 'react';
import {DataGrid, GridColDef, GridRowId} from "@material-ui/data-grid";
import {Button, IconButton} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import {Delete} from "@material-ui/icons";
import {AttachmentInterface, ContactInterface} from "../../../contactList/types/contact.interface";
import {ButtonsForm} from "../phone/editForm/ButtonsForm";
import {PhoneModal} from "../phone/PhoneModal";
import {EditAttachmentForm} from "./EditAttachmentForm";
import {AddAttachmentForm} from "./AddAttachmentForm";

type AttachmentsPropsType = {
    setAttachments: (data: any, tableName: string) => void
    contact: ContactInterface
}

const AttachmentsForm = (props: AttachmentsPropsType) => {
    const currentDate = new Date()
    // console.log(currentDate)

    const {contact, setAttachments} = props

    const columns: GridColDef[] = [
        {field: 'file', headerName: 'Имя файла', width: 200, filterable: false, sortable: false,},
        {field: 'date', headerName: 'Дата Загрузки', width: 160, filterable: false, sortable: false },
        {field: 'comment', headerName: 'Коментарий', width: 160, filterable: false, sortable: false},
        {
            field: 'edit', headerName: '', width: 100, filterable: false, sortable: false, editable: true,
            renderCell: (el) => {
                return <IconButton
                    id={String(el.id)}
                    aria-label="edit"
                    onClick={attachmentClickHandler}
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

    const attachments = contact.attachments


    const [open, setOpen] = useState(false);
    const [attachment, setAttachment] = useState({} as AttachmentInterface);
    let [newAttachment, setNewAttachment] = useState({} as AttachmentInterface);

    const [selectionModel, setSelectionModel] = useState<GridRowId[]>([]);
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<JSX.Element>(<div/>);
    const [buttons, setButtons] = useState<JSX.Element>(<div/>);
    let [newAttachments, setUpdateAttachments] = useState([{id:'1ыва', file: 'test', date: '03.08.2021', comment: 'test'}] as AttachmentInterface[])

    const handleCloseModal = () => {
        setOpen(false);
    };
    const attachmentClickHandler = (event: SyntheticEvent) => {
        const targetID = event.currentTarget.id
        const currentAttachment = newAttachments.find(target => target.id === targetID) || {} as AttachmentInterface;
        setAttachment(currentAttachment)
        setTitle('Редактирование вложений');
        setBody(<EditAttachmentForm/>)
        setButtons(<ButtonsForm onSubmitModal={() => onSubmitModal()}/>)
        setOpen(true);
    }

    const addAttachmentChangeHandler = (event: SyntheticEvent) => {
        setTitle('Добавить вложения');
        setBody(<AddAttachmentForm newAttachment={newAttachment} setNewAttachment={setNewAttachment} newId={newAttachments.length + 1}/>)
        setButtons(<ButtonsForm onSubmitModal={onAddAttachmentSubmit}/>)
        setOpen(true);
    }
    console.log(newAttachment)
    const onSubmitModal = () => {
        handleCloseModal()
    }
    const onAddAttachmentSubmit = () => {
        console.log(newAttachment)
        setUpdateAttachments([...newAttachments, newAttachment])
        setOpen(false);
    }
    const checkedCurrenAttachment = (params: GridRowId[]) => {
        setSelectionModel(params)
    }

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
                rows={newAttachments}
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