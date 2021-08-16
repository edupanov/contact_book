import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStylesModal = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            position: 'relative',
            width: 'auto',
            backgroundColor: theme.palette.background.paper,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: theme.spacing(2, 4, 3),
        },

        modalTitle:{
            padding: 20,
            fontSize: 22,
            textAlign: 'center'
        },
        wrapperInput: {
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
            position: "absolute",
            backgroundColor: 'rgba(255,255,255,0)',
            top: 0,
            right: 0,
        },

    }),
);
