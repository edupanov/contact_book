import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import {FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {AttachmentInterface, AvatarInterface} from "../../../contactList/types/contact.interface";
import {useStyles} from "../styles/editContactStyles";

interface AddPhoneFormInterface {
    setNewAttachment: Dispatch<SetStateAction<AttachmentInterface>>
    newId: number
}

export const AddAttachmentForm = (props: AddPhoneFormInterface) => {

    const classes = useStyles();
    let {setNewAttachment, newId} = props

    const changeAttachmentInfoHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        const newAttachment: any = {[name]: value, id: String(newId)}

        setNewAttachment(newAttachment)
        // value.split('.')
        // console.log( value.split('.')[0].split('\\').reverse()[0])
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
                </Grid>
            </Grid>
        </div>

    );
};
