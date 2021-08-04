import React, {ChangeEvent, useState} from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {AttachmentInterface, ContactInterface} from "../../../contactList/types/contact.interface";
import {useStyles} from "../styles/editContactStyles";
import {useActions} from "../../../../store/hooks/useActions";

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

    const changeAttachmentInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        const updatedAttachment = {...attachment, [name]: value, id: String(attachId)}
        setAttachment(updatedAttachment)
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
                                        onChange={changeAttachmentInfoHandler}
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
