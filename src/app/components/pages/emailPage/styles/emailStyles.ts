import {makeStyles, Theme} from "@material-ui/core/styles";
import {createStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            // margin: theme.spacing(1),
            minWidth: 120,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%'

        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        emailFormWrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid red',
        },
        inputStyle: {
            margin: 5,
            width: '50%'
        }

    }),
);