import {makeStyles} from "@material-ui/styles";
import {Theme} from "@material-ui/core/styles";

function customCheckbox(theme: Theme) {
    return {
        '& .MuiDataGrid-columnHeaderCheckbox': {backgroundColor: '#00000008',},
    };
}

export const useStylesContactList = makeStyles({
    '& .MuiDataGrid-columnHeaderCheckbox': {backgroundColor: '#00000008',},
        root: {
            height: '100%',
            width: '100%',
            backgroundImage: 'url(https://wallpapercave.com/wp/wp3589868.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat-y',
            '& .column': {
                backgroundColor: '#00000008',
            },
        },
        headerWrapper: {
            // border: '1px solid #3f51b5',
            padding: '5px 25px',
        },
        grid: {
            // color: 'white',
        },
        preloader: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginRight: '-50%',
        },
        deleteButton: {
            margin: 10
        },
        searchButton: {
            display: 'inline-flex',
            margin: '10px 20px 10px 10px !important',
            a: {
                textDecoration: 'none',
                svg: {
                    position: 'relative',
                    marginLeft: 5,
                    padding: '-5px',
                    top: 5,
                }
            }
        },
        emailButtonText: {
            fontSize: '0.79rem'
        }
        ,
        link: {
            textDecoration: 'none'
        }
    })
;