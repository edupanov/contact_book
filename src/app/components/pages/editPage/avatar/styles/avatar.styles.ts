import {makeStyles} from "@material-ui/styles";

export const useStylesAvatar = makeStyles({
    wrapper: {
        paddingTop: 10,
        paddingLeft: 10,
        display: 'flex',
        flexWrap: 'wrap',
    },
    box: {
        width:"500%"
    },
    logoLabel:{
        cursor: 'pointer',
    },
    logoInput: {
      display: 'none',
    },
     avatar: {
         width: 200,
         height: 200,
         padding: "10",
         marginBottom: 10
     },
    button: {
        backgroundColor: "#3451b9",
        color: "white",
        marginBottom:20
    },
    editorWrapper: {
        display: 'block'
    }
    })
;