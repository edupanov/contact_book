import React, {useEffect} from 'react';
import {useActions} from "../../store/hooks/useActions";
import {useTypeSelector} from "../../store/hooks/useTypeSelector";
import {Button, CircularProgress, Grid, IconButton, Typography} from "@material-ui/core";
import {DataGrid, GridColDef, GridPageChangeParams} from "@material-ui/data-grid";
import {useHistory, useLocation, useParams} from "react-router";
import styles from "../mainForm/HeaderContactList.module.scss";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";

type ParamsType= {
    page: string
    take: string
}

const ContactList = () => {

    const history = useHistory()
    const location = useLocation()
    const params: ParamsType = useParams()

    const {getContacts} = useActions()
    const {isLoading, data, maxUsers} = useTypeSelector(state => state.contacts)

    useEffect(() => {
        const {page, take} = params
        getContacts(take, page)
    }, [location.pathname])

    if (isLoading || !data) {
        return <CircularProgress color="secondary"/>
    }

    const columns: GridColDef[] = [
        {field: 'name', headerName: 'First name', width: 160},
        {field: 'surname', headerName: 'Last name', width: 160},
        {field: 'patronymic', headerName: 'Patronymic', width: 160},
    ];

    const handlePaginationChange = ({page, pageSize}: GridPageChangeParams) => {
        history.push(`/contacts/${page + 1}/${pageSize}`)
    };


    return (
        <div style={{height: 400, width: '100%'}}>
            <Grid
                className={styles.headerWrapper}
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                        alert('clicked')
                    }}>
                    Создать новый контакт
                </Button>
                <div className={""}>
                    <IconButton aria-label="delete" onClick={() => {
                        console.log('delete')
                    }}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton aria-label="edit" onClick={() => {
                        console.log('edit')
                    }}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton aria-label="edit" onClick={() => {
                        console.log('search')
                    }}>
                        <SearchIcon/>
                    </IconButton>
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        target="_top"
                        rel="noopener noreferrer"
                        href={``}
                    >
                        <Typography variant="button" style={{ fontSize: '0.79rem' }}>
                            Отправить E-mail
                        </Typography>
                    </Button>

                </div>
            </Grid>
            <DataGrid rows={data}
                      columns={columns}
                      pageSize={Number(params.take) || 3}
                      page={Number(params.page) - 1 || 0}
                      rowCount={maxUsers}
                      autoHeight
                      paginationMode={'server'}
                      rowsPerPageOptions={[3, 5, 10, 25]}
                      onPageChange={handlePaginationChange}
                      onPageSizeChange={handlePaginationChange}
                      checkboxSelection
            />
        </div>
    );

}

export default ContactList