import {makeStyles, Theme} from "@material-ui/core/styles";
import {createStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        buttonWrapper: {
            display: 'flex',
            justifyContent: 'space-around',
        },
        inputWrapper :{
            display: 'flex',
            flexDirection: 'column',
        },
    }),
);