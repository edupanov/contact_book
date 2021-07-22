import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    avatar: {
        width: 300
    },
    close: {
      textDecoration: "none",
        position: "fixed",
        top: 160,
        right: 50,
        border: '1px solid black'
    },

    errorTitle: {
        fontSize: '1.5em',
        textAlign: "center",
        color: "red",
        margin: '0 auto',
        padding: '20px 0'
    },
    searchPanel: {
        marginBottom: 30
    },

    editForm: {
      display: "flex",

},
    form: {
        width: '100%'
    },
    row: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    title: {
        textAlign: "center",
        color: "#3451b9"
    },
    wrapperInput:{
        padding: '10px 0',
        borderBottom: '3px solid black'
    },
    input: {
        marginLeft: 10,
        marginRight: 10
    },
    dateWrapper: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column"
    },
    date: {
        margin: '16px 10px',
        width: 195
    },
    period: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    button: {
        position: "relative",
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, 50%)',
        margin: '20px 0',
    }
})