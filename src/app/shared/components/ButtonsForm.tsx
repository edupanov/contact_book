import React from 'react';
import {Button} from "@material-ui/core";
import {useStylesModal} from "../../components/pages/deleteModal/style/styleModal";

interface ButtonsEditFormInterface {
    onSubmitModal: () => void
}

export const ButtonsForm = (props: ButtonsEditFormInterface) => {
    const classes = useStylesModal();
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

