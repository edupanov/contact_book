import React, {FC} from 'react';
import {Route, Switch} from "react-router-dom";
import SearchUser from "../components/pages/searchPage/SearchPage";
import EditPage from "../components/pages/editPage/EditPage";
import AddPage from "../components/pages/addPage/AddPage";
import {ContactInterface} from "../components/contactList/types/contact.interface";
import DeleteModal from "../components/pages/deleteModal/DeleteModal";

export const PATH = {
    HOME: '/contacts',
    CREATE: '/contacts/create',
    EDIT: '/contacts/edit',
    SEARCH: '/contacts/search',
    DELETE: '/contacts/delete'
}

type RouteType = {
    item: ContactInterface
    setItem: Function
}

const Routes = (props:RouteType) => {
    const {item, setItem} = props
    return (
        <div>
            <Switch>
                <Route exact path={PATH.HOME}/>
                <Route exact path={PATH.CREATE} component={AddPage}/>
                <Route exact path={PATH.EDIT}  render={() => <EditPage contact={item} setContact={setItem}/> }/>
                <Route exact path={PATH.SEARCH} component={SearchUser}/>
                {/*<Route exact path={PATH.DELETE} component={DeleteModal}/>*/}
            </Switch>
        </div>
    );
};

export default Routes;
