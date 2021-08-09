import React, {ChangeEvent, useState} from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {AttachmentInterface, ContactInterface} from "../../../contactList/types/contact.interface";
import {useStyles} from "../styles/editContactStyles";
import {useActions} from "../../../../store/hooks/useActions";
import {toBase64} from "../../../../utils/utils";

interface AddPhoneFormInterface {
    setOpen: Function
    contact: ContactInterface
}

export const AddAttachmentForm = (props: AddPhoneFormInterface) => {
    const classes = useStyles();
    let {setOpen, contact} = props

    const {addAttachment} = useActions()
    const [attachment, setAttachment] = useState<AttachmentInterface>({} as AttachmentInterface)
    const attachId = contact.attachments ? contact.attachments.length + 1 : 1
    console.log(attachment)

    const changeAttachmentBase64File = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0]
        const fileName = event.target.files![0].name

        const base64File: any = await toBase64(file)
        const newAttachment = {...attachment, base64File: base64File, file: fileName}
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
                                <div className={classes.wrapperInput}>
                                    <input
                                        name={'file'}
                                        accept="image/*"
                                        className={classes.input}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                        onChange={changeAttachmentBase64File}
                                    />
                                    <label htmlFor="contained-button-file">
                                    </label>
                                    <TextField className={classes.input}
                                               label="Коментарий"
                                               name={"comment"}
                                               type="search"
                                               onChange={changeAttachmentInfoHandler}
                                    />
                                    <TextField className={classes.input}
                                               helperText="Сегодняшняя дата"
                                               name={"date"}
                                               type="datetime-local"
                                               onChange={changeAttachmentInfoHandler}
                                    />
                                </div>
                            </FormGroup>
                        </FormControl>
                    </form>
                    <div>
                        <Button
                            className={classes.button}
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
