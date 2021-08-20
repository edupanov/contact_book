import {makeStyles} from "@material-ui/core";

export const useStylesEditPAge = makeStyles({
    editBG: {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: "whitesmoke"
    },

    container: {
        maxWidth: 1200,
        margin: '0 auto',
    },
    avatar: {
        position: 'relative',
        width: 220,
        paddingLeft:20,
        paddingTop: 60

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
        padding: 20,
        fontSize: 28,
        textAlign: "center",
        color: "#3451b9",
        fontFamily: 'Sans-Serif',
    },
    contactWrapper:{

    },
    wrapperInput: {
        padding: '10px 0',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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
    buttonWrapper: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: 20
    },
    button: {
        padding: 0
    },
    prevButton: {
        width: 50,
        height: 50,
        position: "relative",
        top: 20,
        left: 10,
        border: '1px solid black',


    },
    editButton: {padding: 10, margin: 20},

    submitButton: {
        position: "relative",
        display: 'flex',
        justifyContent: 'center',
        marginTop: 0
    },
    wrapperButtonEditPage: {
        display: "flex",
        justifyContent: "center"
    },
    buttonEditForm: {
        margin: 20
    },
})
