import {makeStyles, Theme} from "@material-ui/core/styles";
import {createStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        buttonWrapper: {
            paddingTop: 20,
            display: 'flex',
            justifyContent: 'space-around',
        },
        inputWrapper :{
            width: 250,
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
        },
        errorForm : {
            color: 'red'
        }
    }),
);