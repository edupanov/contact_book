import React, {ChangeEvent, useState} from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {AttachmentInterface, ContactInterface} from "../../../contactList/types/contact.interface";
import {useActions} from "../../../../store/hooks/useActions";
import {toBase64} from "../../../../utils/utils";
import {useStylesAttachment} from "./styles/attachment.style";

interface AddAttachmentFormInterface {
    setOpen: Function
    contact: ContactInterface
}

export const AddAttachmentForm = (props: AddAttachmentFormInterface) => {
    const styles = useStylesAttachment();
    let {setOpen, contact} = props

    const {addAttachment} = useActions()
    const [attachment, setAttachment] = useState<AttachmentInterface>({} as AttachmentInterface)
    const attachId = contact.attachments ? contact.attachments.length + 1 : 1

    const changeAttachmentBase64File = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0]
        const fileName = event.target.files![0].name
        // console.log(file.name.split('.').pop())


        const base64File: any = await toBase64(file)
        const newAttachment = {...attachment, base64File: base64File, fileName: fileName}
        setAttachment(newAttachment)
    }

    const changeAttachmentInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target

        const newAttachment = {...attachment, [name]: value, id: String(attachId)}
        setAttachment(newAttachment)

    }

    const onSubmit = () => {
        addAttachment(attachment, contact.id)
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
                                    <TextField
                                        name={'fileName'}
                                        className={styles.input}
                                        id="contained-button-file"
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
