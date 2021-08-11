import {makeStyles} from "@material-ui/core";

export const useStylesAttachment = makeStyles({
    wrapperInput: {
        padding: '10px 0',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },

    input: {
        marginLeft: 10,
        marginRight: 10
    },
    editButton: {
        position: "relative",
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, 50%)',
        margin: '40px 0 20px 0',
    },
})
