import React, {SyntheticEvent, useState} from 'react';
import {DataGrid, GridColDef, GridRowId} from "@material-ui/data-grid";
import {Button, IconButton} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import {Delete} from "@material-ui/icons";
import {AttachmentInterface, PhoneInterface} from "../../../contactList/types/contact.interface";
import {LocationType, PhoneFormProps} from "../type/editPage.type";
import {useLocation} from "react-router-dom";
import {ButtonsEditForm} from "../phone/editForm/ButtonsEditForm";
import {PhoneModal} from "../phone/PhoneModal";
import {EditAttachmentForm} from "./EditAttachmentForm";

const AttachmentsForm = (props: PhoneFormProps) => {

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

    const data = location.state.contact.attachments

    const [open, setOpen] = useState(false);
    const [attachment, setAttachment] = useState({} as AttachmentInterface);
    const [selectionModel, setSelectionModel] = useState<GridRowId[]>([]);
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<JSX.Element>(<div/>);
    const [buttons, setButtons] = useState<JSX.Element>(<div/>);

    const rows = [
        {id: '1', fileName: '...', description: 'блабла', comment: 'bla bla bla'},
        {id: '2', fileName: '...', description: 'блабла', comment: 'bla bla bla'},
    ]

    const handleCloseModal = () => {
        setOpen(false);
    };
    const contactClickHandler = (event: SyntheticEvent) => {
        const targetID = event.currentTarget.id
        const phonesForUpdate = Object.keys(attachment).length === 0 ? [...data] : [attachment]
        const currentAttachment = phonesForUpdate.find(target => target.id === targetID) || {} as AttachmentInterface;
        setAttachment(currentAttachment)
        setTitle('Редактирование вложений');
        setBody(<EditAttachmentForm attachment={currentAttachment} setAttachment={setAttachment}/>)
        setButtons(<ButtonsEditForm onSubmitModal={() => onSubmitModal()}/>)
        setOpen(true);
    }

    const onSubmitModal = () => {
        const savedPhone: PhoneInterface = JSON.parse(sessionStorage.getItem('phone') || '{}');
        setContact(savedPhone, 'phones')
        handleCloseModal()
    }

    const checkedCurrenAttachment = (params: GridRowId[]) => {
        setSelectionModel(params)
    }

    return (
        <div style={{height: 162, width: '80%', marginBottom: 30, marginTop: 30}}>
            <h2>Вложения</h2>
            <Button
                variant="outlined"
                color="primary"
            >
                Добавить вложение
            </Button>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={3}
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
