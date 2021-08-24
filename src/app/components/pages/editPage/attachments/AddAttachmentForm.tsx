import React, {ChangeEvent, useState} from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {AttachmentInterface, ContactInterface} from "../../../contactList/types/contact.interface";
import {useActions} from "../../../../store/hooks/useActions";
import {formatDate, toBase64} from "../../../../utils/utils";
import {useStylesAttachment} from "./styles/attachment.style";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

interface AddAttachmentFormInterface {
    setOpen: Function
    contact: ContactInterface
    setNewAttachments?: Function
    newAttachments?: Array<AttachmentInterface>
}

export const AddAttachmentForm = (props: AddAttachmentFormInterface) => {
    const styles = useStylesAttachment();
    let {setOpen, contact, newAttachments, setNewAttachments} = props

    const {addAttachment} = useActions()
    const [attachment, setAttachment] = useState<AttachmentInterface>({} as AttachmentInterface)

    const changeAttachmentBase64File = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0]
        const index = file.name.lastIndexOf('.')
        const fileName = file.name.substring(0, index)
        const ext = file.name.substring(index, file.name.length)

        const base64File: any = await toBase64(file)
        const newAttachment = {...attachment, base64File, fileName, ext}
        setAttachment(newAttachment)
    }

    const changeAttachmentInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const attachId = contact.attachments ? contact.attachments.length + 1 : newAttachments?.length! + 1
        const {name, value} = event.target
        const newAttachment = {...attachment, [name]: value, id: String(attachId)}
        setAttachment(newAttachment)
    }
    console.log(attachment)
    const onSubmit = () => {
        if (!contact.id) {
            let date: any = new Date();
            const today = formatDate(date, 'DD.MM.yyyy')
            setNewAttachments!([...newAttachments!, {...attachment, uploadDate: today}])
        } else addAttachment(attachment, contact.id)
        setOpen(false)
    }

    return (
        <div>
            <Grid container justifyContent="center">
                <Grid item xs={10}>
                    <form>
                        <FormControl>
                            <FormGroup>
                                <div className={styles.wrapperInput }>
                                    <label htmlFor="file-upload" className={styles.customUpload}>
                                        <div>
                                            <CloudUploadIcon/>
                                        </div>
                                        <div className={styles.attachmentFileName}>
                                            <span>{attachment.fileName! ? `Имя файла: ${attachment.fileName}` : 'Загрузить файл'}</span>
                                        </div>
                                    </label>
                                    <input
                                        className={styles.attachmentButton}
                                        name={'fileName'}
                                        id="file-upload"
                                        type="file"
                                        onChange={changeAttachmentBase64File}
                                    />
                                    <TextField className={styles.input}
                                               label="Коментарий"
                                               name={"comment"}
                                               type="search"
                                               onChange={changeAttachmentInfoHandler}
                                    />
                                </div>
                            </FormGroup>
                        </FormControl>
                    </form>
                    <div>
                        <Button
                            className={styles.editButton}
                            variant={'contained'}
                            onClick={onSubmit}
                            color={'primary'}
                        >Сохранить изменения</Button>
                    </div>
                </Grid>
            </Grid>
        </div>

    );
};
