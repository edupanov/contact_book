import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {AttachmentInterface, ContactInterface, PhoneInterface} from "../../../contactList/types/contact.interface";
import {useStyles} from "../../deleteModal/style/styleModal";
import {TargetType} from "../../searchPage/SearchPage";
import {useActions} from "../../../../store/hooks/useActions";

interface EditAttachmentFormInterface {
    setOpen: Function
    contact: ContactInterface
    attachment: AttachmentInterface
}

export const EditAttachmentForm = (props: EditAttachmentFormInterface) => {
    const classes = useStyles();
    let {setOpen, contact, attachment} = props
    const [newAttachment, setNewAttachment] = useState({} as AttachmentInterface)

    const {updateAttachment} = useActions()

    const changePhoneInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)
        if (attachment) {
            attachment = {...attachment, [target.name]: target.value}
        }
        setNewAttachment(attachment)
    }

    const onSubmit = () => {
        setOpen(false)
        updateAttachment(newAttachment, contact.id, attachment.id)
    }

    return (
        <div>
            <Grid container justifyContent="center">
                <Grid item xs={10}>
                    <form>
                        <FormControl>
                            <FormGroup>
                                <div className={classes.wrapperInput}>
                                    <TextField className={classes.input}
                                               label="Имя файла"
                                               name={"file"}
                                               type="search"
                                              onChange={changePhoneInfoHandler}
                                              defaultValue={attachment.file ? attachment.file : ''}
                                    />

                                    <TextField className={classes.input}
                                               label="Коментарий"
                                               name={"comment"}
                                               type="search"
                                              onChange={changePhoneInfoHandler}
                                              defaultValue={attachment.comment ? attachment.comment : ''}
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

