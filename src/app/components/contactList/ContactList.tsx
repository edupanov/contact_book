import React, {ChangeEvent, MouseEventHandler, SyntheticEvent, useEffect, useRef, useState} from 'react';
import {useActions} from "../../store/hooks/useActions";
import {useTypeSelector} from "../../store/hooks/useTypeSelector";
import {Button, Checkbox, CircularProgress, Grid, IconButton, Typography} from "@material-ui/core";
import {
    DataGrid,
    GridCellParams,
    GridColDef,
    GridPageChangeParams,
    GridRowId,
    GridSelectionModelChangeParams
} from "@material-ui/data-grid";
import styles from "../mainForm/HeaderContactList.module.scss";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from '@material-ui/icons/Search';
import {ContactInterface} from "./types/contact.interface";
import {NavLink} from 'react-router-dom';
import Routes from '../../routes/Routes';
import {Delete} from "@material-ui/icons";
import DeleteModal from "../pages/deleteModal/DeleteModal";

const ContactList = () => {

    const columns: GridColDef[] = [
        {field: 'name', headerName: 'Имя', width: 160, filterable: false, sortable: false, hide: true},
        {field: 'surname', headerName: 'Фамилия', width: 160, filterable: false, sortable: false, hide: true},
        {field: 'patronymic', headerName: 'Отчество', width: 160, filterable: false, sortable: false, hide: true},
        {
            field: 'fullName', headerName: 'ФИО', width: 250, filterable: false, sortable: false,
            renderCell: (params: GridCellParams) => {
                return <span>{`${params.row.name} ${params.row.surname} ${params.row.patronymic}`}</span>
            }
        },
        {field: 'birthDate', headerName: 'Дата рождения', width: 170, filterable: false, sortable: false},
        {field: 'gender', headerName: 'Пол', width: 80, filterable: false, sortable: false},
        {field: 'maritalStatus', headerName: 'Семейное положение', width: 200, filterable: false, sortable: false},
        {field: 'nationality', headerName: 'Гражданство', width: 140, filterable: false, sortable: false},
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
        {
            field: 'edit', headerName: '', width: 100, filterable: false, sortable: false,
            renderCell: (el) => <IconButton
                aria-label="edit"
                id={String(el.id)}
                onClick={contactClickHandler}
            >
                <NavLink to={'/contacts/edit'}>
                    <EditIcon/>
                </NavLink>
            </IconButton>
        },
        {
            field: 'del', headerName: '', width: 100, filterable: false, sortable: false,
            renderCell: (el) =>  <IconButton
                aria-label="edit"
                id={String(el.id)}
                onClick={contactClickHandler}
            >
                <NavLink to={'/contacts/delete'}>
                    <Delete/>
                </NavLink>
            </IconButton>},
    ];


    const usePrevious = (value: any) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    const [item, setItem] = useState<ContactInterface>({} as ContactInterface)
    const [items, setItems] = useState<ContactInterface[]>([])
    const [selectionModel, setSelectionModel] = React.useState<GridRowId[]>([]);
    const [changeContact, setChangeContact] = useState<ContactInterface>({} as ContactInterface)

    const {getContacts, setPage, setTake} = useActions()
    const {isLoading, data, maxUsers, page, take} = useTypeSelector(state => state.contacts)

    const prevVal = usePrevious(data)

    const updateFullAddress = (data: ContactInterface[]) => {
        const updatedData = [...data]
        updatedData.map((item: ContactInterface) => {
            item.address.fullAddress = `${item.address.zipCode} ${item.address.country}, г. ${item.address.city}, ул. ${item.address.street} ${item.address.building}/${item.address.flat}`
        })
        setItems(updatedData)
    }

    useEffect(() => {
        getContacts()
        if (data && data.length > 0) {
            updateFullAddress(data)
        }
    }, [])

    useEffect(() => {        // убирает данные из формы редактирования при неактивном чебоксе
        if (selectionModel.length === 0) {
            const emptyItem = {} as ContactInterface
            setItem(emptyItem)
        }
    }, [selectionModel]);

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

    const handlePaginationChange = ({page, pageSize}: GridPageChangeParams) => {
        setPage(page + 1)
        setTake(pageSize)
        getContacts()
    };

    const setCurrentContact = (id: string) => {
        const contactsForUpdate = [...data]
        const currentContact: ContactInterface = contactsForUpdate.find(item => item.id === id)
        setItem(currentContact)
        return currentContact
    }

    const contactClickHandler = (event: SyntheticEvent) => {
        const targetID = event.currentTarget.id
        const contactsForUpdate = [...data]
        const currentContact: ContactInterface = contactsForUpdate.find(target => target.id === targetID)
        setItem(currentContact)

        const checkedContacts: Array<ContactInterface> = []


    }

    // отменяет мультивыбор строк
    const CancelMultiSelection = (selection: GridSelectionModelChangeParams) => {
        const newSelectionModel = selection.selectionModel;

        if (newSelectionModel.length > 1) {
            const selectionSet = new Set(selectionModel);
            const result = newSelectionModel.filter(
                (s) => !selectionSet.has(s)
            );

            setSelectionModel(result);
        } else {
            setSelectionModel(newSelectionModel);
        }
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
                    <IconButton aria-label="delete" onClick={() => {
                        console.log('delete')
                    }}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton aria-label="edit">
                        <NavLink to={'/contacts/edit'}>
                            <EditIcon/>
                        </NavLink>
                    </IconButton>
                    <IconButton aria-label="search">
                        <NavLink to={'/contacts/search'}>
                            <SearchIcon/>
                        </NavLink>
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

            <Routes item={item} setItem={setItem}/>

            <DataGrid rows={items}
                      columns={columns}
                      pageSize={take}
                      page={page - 1 || 0}
                      rowCount={maxUsers}
                      autoHeight
                      paginationMode={'server'}
                      rowsPerPageOptions={[5, 10, 25]}
                      onPageChange={handlePaginationChange}
                      onPageSizeChange={handlePaginationChange}
                      sortingMode={'server'}
                      // onRowSelected={(params) => setCurrentContact(params.data.id)}
                      checkboxSelection
                      disableSelectionOnClick
                      selectionModel={selectionModel}
                      onSelectionModelChange={CancelMultiSelection}
            />
        </div>
    );
}

export default ContactList
