import React, {FC} from 'react';
import {Route, Switch} from "react-router-dom";
import SearchUser from "../components/pages/searchPage/SearchPage";
import EditPage from "../components/pages/editPage/EditPage";
import AddPage from "../components/pages/addPage/AddPage";
import {ContactInterface} from "../components/contactList/types/contact.interface";

export const PATH = {
    CREATE: '/contacts/create',
    EDIT: '/contacts/edit',
    SEARCH: '/contacts/search',
}

type RouteType = {
    search: Boolean
    edit: Boolean
    item: ContactInterface
    setItem: Function
    add: Boolean
}

const Routes = (props:RouteType) => {
    const {search, add, item, setItem, edit} = props
    return (
        <div>
            <Switch>
                <Route exact path="/contacts/search" render={() => search ? <SearchUser/> : null}/>
                <Route exact path="/contacts/edit"
                       render={() => edit ? <EditPage contact={item} setContact={setItem}/> : null}/>
                <Route exact path="/contacts/create" render={() => add ? <AddPage/> : null}/>
            </Switch>
        </div>
    );
};

export default Routes;
