import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import {FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {AttachmentInterface, PhoneInterface} from "../../../contactList/types/contact.interface";
import {useStyles} from "../../deleteModal/style/styleModal";
import {TargetType} from "../../searchPage/SearchPage";

interface EditAttachmentFormInterface {
    attachment: AttachmentInterface,
    setAttachment: Dispatch<SetStateAction<AttachmentInterface>>
}

export const EditAttachmentForm = () => {
    const classes = useStyles();

    // let {attachment, setAttachment} = props

    const changePhoneInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const target: TargetType = (event.target)
        // if (attachment) {
        //     attachment = {...attachment, [target.name]: target.value}
        // }
        // sessionStorage.setItem('phone', JSON.stringify(attachment));
        // setAttachment(attachment)
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
                                               name={"fileName"}
                                               type="search"
                                               onChange={changePhoneInfoHandler}
                                              // defaultValue={attachment.file ? attachment.file : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Описание"
                                               name={"description"}
                                               type="search"
                                               onChange={changePhoneInfoHandler}
                                              // defaultValue={attachment.comment ? attachment.comment : ''}
                                    />
                                    <TextField className={classes.input}
                                               label="Коментарий"
                                               name={"comment"}
                                               type="search"
                                               onChange={changePhoneInfoHandler}
                                             //  defaultValue={attachment.comment ? attachment.comment : ''}
                                    />
                                </div>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>

    );
};

