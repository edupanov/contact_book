import {makeStyles, Theme} from "@material-ui/core/styles";
import {createStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {

            position: 'relative',
            minWidth: 120,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%'

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
        },
        titleTemplate:{
            position: 'absolute',
            left: 15,
            transition:' color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
            '&:focus': {
            },
        },
        templateText:{
            marginRight: '24px !important',
        },
        select: {
            marginTop: '0 !important',
            paddingLeft: 14,
            border: '1px solid black',
            borderRadius: '4px',
            borderColor: '#c4c4c4',
            width: '100%',
            height: 60,
            '&:hover': {
                borderColor: 'black',
                borderBottom: 'none'
            },
            '&::before': {
                borderBottom: 'none'
            },
            '&::after': {
                borderBottom: 'none'
            }

        }

    }),
);