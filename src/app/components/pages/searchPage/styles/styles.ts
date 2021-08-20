import {makeStyles} from "@material-ui/core";

export const useStylesSearchPage = makeStyles({
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
    searchWrapper:{
        maxWidth: '100%',
        flexBasis: '100%'
    },
    form: {
        maxWidth: 1200,

        width: '100%',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    },
    searchTable: {
        maxWidth: 1000,
        margin: '0 auto'
    },
    row: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    title: {
        padding: 20,
        fontSize: 28,
        textAlign: "center",
        color: "#3451b9",
        fontFamily: 'Sans-Serif',
    },
    delInfoInput: {
        position: "relative",
        left: 0,
        fontFamily: 'Sans-Serif',
        fontSize:12,
        fontWeight: 'bold',
        cursor: 'pointer'

    },
    wrapperInput: {
        padding: '10px 0',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    input: {
        margin: '0 10px 10px',
    },
    contactInfo: {
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'space-around'

    },
    dateWrapper: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column"
    },
    date: {
        margin: '0 10px 10px 10px',
        width: 195
    },
    period: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    addressWrapper: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    buttonWrapper: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: 20,
        marginBottom: 20
    },
    button: {
        padding: 0
    },
    prevButton: {textDecoration: 'none'},
    editButton: {padding: 10, margin: 20},

    submitButton: {
        position: "relative",
        display: 'flex',
        justifyContent: 'center',
        margin: 80
    },
    wrapperButtonEditPage: {
        display: "flex",
        justifyContent: "center"
    },
    buttonEditForm: {
        margin: 20
    },
})
