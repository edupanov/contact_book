import {makeStyles} from "@material-ui/styles";
import contactListBG from '../../../../assets/img/contactListBG.jpg'

export const useStylesContactList = makeStyles({
        root: {
            minHeight: '100%',
            minWidth: '100%',
            backgroundImage: `url(${contactListBG})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            '& .column': {
                backgroundColor: '#00000000',
            },
        },

        container: {
            maxWidth: 1200,
            margin: '0 auto',
            padding: 5
        },
        headerWrapper: {
            padding: '0 25px',
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