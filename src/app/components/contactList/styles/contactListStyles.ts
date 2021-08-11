import {makeStyles} from "@material-ui/styles";

export const useStylesContactList = makeStyles({
        root: {
            height: '100%',
            headerClassName: 'column',
            width: '100%',
            backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20200808/pngtree-white-gray-gradient-abstract-background-image_388903.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            '& .column': {
                backgroundColor: '#929292',
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