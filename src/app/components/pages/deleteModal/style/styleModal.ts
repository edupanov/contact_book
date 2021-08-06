import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            position: 'relative',
            backgroundColor: theme.palette.background.paper,

            // border: '2px solid #000',
            // boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        wrapperInput:{
            padding: '10px 0',
        },
        input: {
            marginLeft: 10,
            marginRight: 10
        },
        button: {
            position: "relative",
            left: '50%',
            marginRight: '-50%',
            transform: 'translate(-50%, 50%)',
            margin: '80px 0 20px 0',
        },
        modalButtonClose: {
          position:  "absolute",
            left: '90%'
        },

    }),
);
