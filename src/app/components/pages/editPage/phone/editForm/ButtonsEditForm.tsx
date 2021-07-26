import React from 'react';
import {Button} from "@material-ui/core";
import {useStyles} from "../../../deleteModal/style/styleModal";

interface ButtonsEditFormInterface {
    onSubmitModal: () => void
}

export const ButtonsEditForm = (props: ButtonsEditFormInterface) => {
    const classes = useStyles();
    const {onSubmitModal} = props

    return (
        <div>
            <Button
                className={classes.button}
                variant={'contained'}
                onClick={onSubmitModal}
                color={'primary'}
            >Сохранить изменения</Button>
        </div>
    );
};

