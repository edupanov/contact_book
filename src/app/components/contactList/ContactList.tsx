import React, {SyntheticEvent, useEffect, useRef, useState} from 'react';
import {useActions} from "../../store/hooks/useActions";
import {useTypeSelector} from "../../store/hooks/useTypeSelector";
import {Button, CircularProgress, Grid, IconButton, Typography} from "@material-ui/core";
import {
    DataGrid,
    GridCellParams,
    GridColDef,
    GridPageChangeParams,
    GridRowId,
} from "@material-ui/data-grid";
import styles from "../mainForm/HeaderContactList.module.scss";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from '@material-ui/icons/Search';
import {ContactInterface} from "./types/contact.interface";
import {NavLink, useHistory} from 'react-router-dom';
import {Delete} from "@material-ui/icons";
import DeleteModal from "../pages/deleteModal/DeleteModal";
import SearchPage from "../pages/searchPage/SearchPage";
import {PATH} from "../../routes/Routes";

const ContactList = () => {

    const columns: GridColDef[] = [
        {field: 'name', headerName: 'Имя', width: 160, filterable: false, sortable: false, hide: true},
        {field: 'surname', headerName: 'Фамилия', width: 160, filterable: false, sortable: false, hide: true},
        {field: 'patronymic', headerName: 'Отчество', width: 160, filterable: false, sortable: false, hide: true},
        {
            field: '', headerName: 'ФИО', width: 250, filterable: false, sortable: false,
            renderCell: (params: GridCellParams) => {
                return <span>{`${params.row.name} ${params.row.surname} ${params.row.patronymic}`}</span>
            }
        },
        {field: 'birthDate', headerName: 'Дата рождения', width: 170, filterable: false, sortable: false},
        {field: 'gender', headerName: 'Пол', width: 80, filterable: false, sortable: false, hide: true},
        {field: 'maritalStatus', headerName: 'Семейное положение', width: 200, filterable: false, sortable: false, hide: true},
        {field: 'nationality', headerName: 'Гражданство', width: 140, filterable: false, sortable: false, hide: true},
        {
            field: 'address',
            headerName: 'Адрес',
            flex: 1,
            width: 350,
            filterable: false,
            sortable: false,
            renderCell: (params: GridCellParams) => {
                return <span>{params.row.address.fullAddress}</span>
            }
        },
        {field: 'email', headerName: 'Email', width: 140, filterable: false, sortable: false, hide: true},
        {field: 'currenJob', headerName: 'Место работы', width: 140, filterable: false, sortable: false},
        {
            field: 'edit', headerName: '', width: 100, filterable: false, sortable: false, editable: true,
            renderCell: (el) => {
                return <IconButton
                    aria-label="edit"
                    id={String(el.id)}
                    onClick={contactClickHandler}
                >
                    <NavLink to={'/contacts/edit'}>
                        <EditIcon/>
                    </NavLink>
                </IconButton>
            }
        },
        {
            field: 'del', headerName: '', width: 100, filterable: false, sortable: false,
            renderCell: (el) =>
                <IconButton
                    aria-label="del"
                    id={String(el.id)}
                    onClick={deleteContact}
                >
                    <Delete/>
                </IconButton>
        },
    ];

    const usePrevious = (value: any) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    const [items, setItems] = useState<ContactInterface[]>([])
    const [selectionModel, setSelectionModel] = useState<GridRowId[]>([]);
    const [open, setOpen] = React.useState(false);
    const [openSearch, setOpenSearch] = React.useState(false);
    const {getContacts, setPage, setTake, deleteContacts, deleteAll} = useActions()
    const {isLoading, data, maxUsers, page, take} = useTypeSelector(state => state.contacts)
    const {isDeleteLoading} = useTypeSelector(state => state.delete)
    const prevVal = usePrevious(data)

    const history = useHistory()

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    const updateFullAddress = (data: ContactInterface[]) => {
        const updatedData = [...data]
        updatedData.map((item: ContactInterface) => {
            return item.address.fullAddress = `${item.address.zipCode} ${item.address.country}, г. ${item.address.city}, ул. ${item.address.street} ${item.address.building}/${item.address.flat}`
        })
        setItems(updatedData)
    }

    const handlePaginationChange = ({page, pageSize}: GridPageChangeParams) => {
        setPage(page + 1)
        setTake(pageSize)
        getContacts()
    };

    const checkedCurrenContacts = (params: GridRowId[]) => {
        setSelectionModel(params)
    }

    const contactClickHandler = (event: SyntheticEvent) => {
        const targetID = event.currentTarget.id
        const contactsForUpdate = [...data]
        const currentContact: ContactInterface = contactsForUpdate.find(target => target.id === targetID);
        history.push(`${PATH.EDIT}/${currentContact.id}`, {contact: currentContact})
    }

    const searchClickHandler = (event: SyntheticEvent) => {
      if(event.currentTarget) {
          setOpenSearch(true)
      }
    }

    const searchClickHandlerClose = () => {
        setOpenSearch(false)
    }

    const deleteContact = (event: SyntheticEvent) => {
        const id = event.currentTarget.id
        const checkedContacts: Array<string> = []
        deleteContacts([...checkedContacts, id])
    }

    const deleteCheckedContacts = () => {
        deleteContacts(selectionModel)
        handleCloseModal()
        setSelectionModel([])
    }

    useEffect(() => {
        getContacts()
        if (data && data.length > 0) {
            updateFullAddress(data)
        }
    }, [])

    useEffect(() => {
        if (data && data.length > 0) {
            if (data !== prevVal) {
                updateFullAddress(data)
            }
        } else {
            setItems([])
        }
    }, [data])

    if (isLoading || !data) {
        return <CircularProgress
            className={styles.preloader}
            size={60}
            color="secondary"
        />
    }

    return (
        <div style={{height: 400, width: '100%'}}>
            <Grid
                className={styles.headerWrapper}
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            > <NavLink className={styles.link} to={'/contacts/create'}>
                <Button
                    variant="outlined"
                    color="primary"
                >
                    Создать новый контакт
                </Button>
            </NavLink>
                <div>
                    {/*<Button*/}
                    {/*    onClick={deleteAll}*/}
                    {/*    className={selectionModel.length >= 5 ? styles.deleteButton : styles.hideButton}*/}
                    {/*    variant="outlined"*/}
                    {/*    color="secondary"*/}
                    {/*>*/}
                    {/*    Удалить все*/}
                    {/*    <Delete/>*/}
                    {/*</Button>*/}
                    <Button
                        onClick={handleOpenModal}
                        disabled={selectionModel.length === 0}
                        className={styles.deleteButton}
                        variant="outlined"
                        color="secondary"
                    >
                        Удалить выбранные
                        <Delete/>
                    </Button>
                    <Button

                       onClick={searchClickHandler}
                        className={styles.searchButton}
                        variant="outlined"
                        color="primary"
                    >
                            Поиск
                            <SearchIcon/>
                    </Button>
                    <NavLink className={styles.link} to={'/contacts/email'}>
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
                        </NavLink>
                </div>
            </Grid>

            {openSearch ? <SearchPage searchClickHandlerClose={searchClickHandlerClose}/> : null}

            <DataGrid rows={items}
                      columns={columns}
                      pageSize={take}
                      page={page - 1 || 0}
                      rowCount={maxUsers}
                      autoHeight
                      loading={isDeleteLoading}
                      paginationMode={'server'}
                      rowsPerPageOptions={[5, 10, 25]}
                      onPageChange={handlePaginationChange}
                      onPageSizeChange={handlePaginationChange}
                      sortingMode={'server'}
                      disableSelectionOnClick
                      checkboxSelection
                      onSelectionModelChange={checkedCurrenContacts}
                      selectionModel={selectionModel}
            />

            <DeleteModal open={open}
                         onClose={handleCloseModal}
                         selectionModel={selectionModel}
                         deleteCheckedContacts={deleteCheckedContacts}
                         deleteAll={deleteAll}/>
        </div>
    );
}

export default ContactList
