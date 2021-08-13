import {makeStyles} from "@material-ui/core";
import editFormBG from '../../../../../assets/img/editFormBG.jpg'

export const useStylesEditPAge = makeStyles({
    editBG: {
        backgroundImage: `url(${editFormBG})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    container: {
        maxWidth: 1400,
        margin: '0 auto',
    },
    avatar: {
        width: 300
    },
    // close: {
    //     textDecoration: "none",
    //     position: "fixed",
    //     top: 160,
    //     right: 50,
    //     border: '1px solid black'
    // },

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
        color: "#3451b9"
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
    buttonWrapper: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: 20
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
