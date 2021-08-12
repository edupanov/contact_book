import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStylesAddPhone = makeStyles((theme: Theme) =>
    createStyles({

        wrapperInput: {
            padding: '10px 0',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
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
    }),
);
