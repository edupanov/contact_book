import React, {ChangeEvent} from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {AttachmentInterface, ContactInterface} from "../../../contactList/types/contact.interface";
import {useStyles} from "../../deleteModal/style/styleModal";

interface EditAttachmentFormInterface {
    setOpen: Function
    contact: ContactInterface
    attachment: AttachmentInterface
}

export const EditAttachmentForm = (props: EditAttachmentFormInterface) => {
    const classes = useStyles();
    let {setOpen, attachment} = props


    const changeAttachmentHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        if (name === 'file') {
            attachment.file = value
        }
        if (name === 'comment') {
            attachment.comment = value
        }
    }

    const onSubmit = () => {
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
                                    <TextField className={classes.input}
                                               label="Имя файла"
                                               name={"file"}
                                               type="search"
                                               onChange={changeAttachmentHandler}
                                               defaultValue={attachment.file ? attachment.file : ''}
                                    />

                                    <TextField className={classes.input}
                                               label="Коментарий"
                                               name={"comment"}
                                               type="search"
                                               onChange={changeAttachmentHandler}
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