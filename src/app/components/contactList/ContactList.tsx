import React, {useEffect, useState} from 'react';
import {useActions} from "../../store/hooks/useActions";
import {useTypeSelector} from "../../store/hooks/useTypeSelector";
import {Button, CircularProgress, Grid, IconButton, Typography} from "@material-ui/core";
import {DataGrid, GridColDef, GridPageChangeParams} from "@material-ui/data-grid";
import styles from "../mainForm/HeaderContactList.module.scss";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from '@material-ui/icons/Search';
import SearchUser from "../searchUser/SearchUser";


const ContactList = () => {

    const {getContacts, setPage, setTake} = useActions()
    const {isLoading, data, maxUsers, page, take} = useTypeSelector(state => state.contacts)


    useEffect(() => {
        getContacts()
    }, [])

    if (isLoading || !data) {
        return <CircularProgress color="secondary"/>
    }

    const columns: GridColDef[] = [
        {field: 'name', headerName: 'First name', width: 160},
        {field: 'surname', headerName: 'Last name', width: 160},
        {field: 'patronymic', headerName: 'Patronymic', width: 160},
    ];

    const handlePaginationChange = ({page, pageSize}: GridPageChangeParams) => {
        setPage(page + 1)
        setTake(pageSize)
        getContacts()
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
                        <Typography variant="button" style={{fontSize: '0.79rem'}}>
                            Отправить E-mail
                        </Typography>
                    </Button>

                </div>
            </Grid>
            <SearchUser/>

            <DataGrid rows={data}
                      columns={columns}
                      pageSize={take}
                      page={page - 1 || 0}
                      rowCount={maxUsers}
                      autoHeight
                      paginationMode={'server'}
                      rowsPerPageOptions={[5, 10, 25]}
                      onPageChange={handlePaginationChange}
                      onPageSizeChange={handlePaginationChange}
                      checkboxSelection
                      sortingMode={'server'}

            />
        </div>
    );

}

export default ContactList