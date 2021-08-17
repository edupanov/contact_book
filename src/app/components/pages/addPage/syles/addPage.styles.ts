import {makeStyles} from "@material-ui/core";
import addFormBG from "../../../../../assets/img/addFormBG.jpg";

export const useStylesAddPage = makeStyles({
    error: {
        fontSize: 14,
        height: 16,
        color: 'red',
        position: 'relative',
        top: -8,
        left: 10
    },

    addPageBG:{
        height:'100%',
        backgroundImage: `url(${addFormBG})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat-y',
    },
    container: {
        maxWidth: 1030,
        margin: '0 auto',
    },

    addPageWrapper: {
        height: '100%',
        width: '100%',
        marginBottom: 30,
    },
    form: {
        width: '100%',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
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

    input: {
        margin: '0 10px 10px',
        width: 200
    },
    gender: {width: 200, margin: '0 10px 10px'},

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
    addressWrapper:{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    buttonWrapper: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: 20
    },

    prevButton: {textDecoration: 'none'},
    editButton: {padding: 10, margin: 20},

    submitButton: {
        position: "relative",
        display: 'flex',
        justifyContent: 'center',
        margin: 80
    },
})
