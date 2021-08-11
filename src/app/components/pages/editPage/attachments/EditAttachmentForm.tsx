import React, {ChangeEvent} from 'react';
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {AttachmentInterface, ContactInterface} from "../../../contactList/types/contact.interface";
import {useStylesAttachment} from "./styles/attachment.style";

interface EditAttachmentFormInterface {
    setOpen: Function
    contact: ContactInterface
    attachment: AttachmentInterface
}

export const EditAttachmentForm = (props: EditAttachmentFormInterface) => {
    const styles = useStylesAttachment();
    let {setOpen, attachment} = props


    const changeAttachmentHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        if (name === 'fileName') {
            attachment.fileName = value
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
                                <div className={styles.wrapperInput}>
                                    <TextField className={styles.input}
                                               label="Имя файла"
                                               name={"file"}
                                               type="search"
                                               onChange={changeAttachmentHandler}
                                               defaultValue={attachment.fileName ? attachment.fileName : ''}
                                    />

                                    <TextField className={styles.input}
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