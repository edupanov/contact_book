import React, {useEffect, useState} from 'react';
import {useActions} from "../../store/hooks/useActions";
import {useTypeSelector} from "../../store/hooks/useTypeSelector";
import {Button, CircularProgress, Grid, IconButton, Typography} from "@material-ui/core";
import {DataGrid, GridCellParams, GridColDef, GridPageChangeParams} from "@material-ui/data-grid";
import styles from "../mainForm/HeaderContactList.module.scss";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from '@material-ui/icons/Search';
import SearchUser from "../searchUser/SearchPage";
import {ContactInterface} from "./types/contact.interface";
import CreateContact from "../createContact/CreateContact";


const ContactList = () => {

    const columns: GridColDef[] = [
        {field: 'name', headerName: 'Имя', width: 160, filterable: false, sortable: false,},
        {field: 'surname', headerName: 'Фамилия', width: 160, filterable: false, sortable: false},
        {field: 'patronymic', headerName: 'Отчество', width: 160, filterable: false, sortable: false},
        {field: 'birthDate', headerName: 'Дата рождения', width: 170, filterable: false, sortable: false},
        {field: 'gender', headerName: 'Пол', width: 80, filterable: false, sortable: false},
        {field: 'maritalStatus', headerName: 'Семейное положение', width: 200, filterable: false, sortable: false},
        {field: 'nationality', headerName: 'Гражданство', width: 140, filterable: false, sortable: false},
        {
            field: 'address',
            headerName: 'Адрес',
            width: 160,
            filterable: false,
            flex: 1,
            sortable: false,
            renderCell: (params: GridCellParams) => {
                return <span>{params.row.address.fullAddress}</span>
            }
        },
    ];


    const [search, setSearch] = useState<Boolean>(false)
    const [add, setAdd] = useState<Boolean>(false)


    const {getContacts, setPage, setTake} = useActions()
    const {isLoading, data, maxUsers, page, take} = useTypeSelector(state => state.contacts)

    useEffect(() => {
        getContacts()
    }, [])


    if (data) {
        const updatedData = [...data]
        updatedData.map((item: ContactInterface) => {
            item.address.fullAddress = Object.values(item.address).join(' ')
        })
    }

    if (isLoading || !data) {
        return <CircularProgress color="secondary"/>
    }

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
                    onClick={() => setAdd(!add)}>
                    Создать новый контакт
                </Button>
                <div className={""}>
                    <IconButton aria-label="delete" onClick={() => {
                        console.log('delete')
                    }}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton aria-label="edit" onClick={() => setAdd(!add)}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton aria-label="search" onClick={() => setSearch(!search)}>
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

            {search ? <SearchUser/> : null}
            {add ? <CreateContact/> : null}

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
