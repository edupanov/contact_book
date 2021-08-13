import React, {SyntheticEvent, useState} from 'react';
import {DataGrid, GridColDef, GridRowId} from "@material-ui/data-grid";
import {Button, IconButton} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import {Delete} from "@material-ui/icons";
import {ContactInterface} from "../../../contactList/types/contact.interface";
import {ModalForEditForm} from "../../../../shared/components/ModalForEditForm";
import {AddAttachmentForm} from "./AddAttachmentForm";
import {EditAttachmentForm} from "./EditAttachmentForm";
import {useActions} from "../../../../store/hooks/useActions";
import {useStyles} from "../styles/formStyles";

type AttachmentsPropsType = {
    contact: ContactInterface
}

const AttachmentsForm = (props: AttachmentsPropsType) => {
    const classes = useStyles()
    const {contact} = props

    const columns: GridColDef[] = [
        {field: 'fileName', headerName: 'Имя файла', width: 200, filterable: false, sortable: false,},
        {field: 'uploadDate', headerName: 'Дата Загрузки', width: 160, filterable: false, sortable: false},
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
                    id={String(el.id)}
                    aria-label="del"
                    onClick={deleteCurrentAttachment}
                >
                    <Delete/>
                </IconButton>
        },
    ]
    const {deleteAttachment} = useActions()
    const [open, setOpen] = useState(false);
    const [selectionModel, setSelectionModel] = useState<GridRowId[]>([]);
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<JSX.Element>(<div/>);
    const [buttons] = useState<JSX.Element>(<div/>);

    // ADD ATTACHMENT
    const addAttachmentChangeHandler = () => {
        setTitle('Добавить вложения');
        setBody(<AddAttachmentForm setOpen={setOpen} contact={contact}/>)
        setOpen(true);
    }
    //EDIT ATTACHMENT
    const editAttachmentChangeHandler = (event: SyntheticEvent) => {
        setTitle('Редактирование вложений');
        setOpen(true);
        const targetID = event.currentTarget.id
        const currentAttachment = contact.attachments.find(target => {
            return target.id === targetID
        })!;
        setBody(<EditAttachmentForm setOpen={setOpen} contact={contact} attachment={currentAttachment}/>)
    }
    //DELETE ATTACHMENT
    const deleteCurrentAttachment = (event: SyntheticEvent) => {
        const targetID = event.currentTarget.id
        deleteAttachment(contact.id, targetID)
    }

    const checkedCurrenAttachment = (params: GridRowId[]) => {
        setSelectionModel(params)
    }

    const handleCloseModal = () => {
        setOpen(false);
    };

    return (
        <div style={{width: '100%', marginBottom: 40, marginTop: 30}}>
            <h2 className={classes.formTitle}>Вложения</h2>
            <Button
                className={classes.button}
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

export default AttachmentsForm;
