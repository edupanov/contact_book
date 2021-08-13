import React from 'react';
import {Route, Switch} from "react-router-dom";
import EditPage from "../components/pages/editPage/EditPage";
import AddPage from "../components/pages/addPage/AddPage";
import MainPage from "../components/pages/mainPage/MainPage";
import EmailPage from "../components/pages/emailPage/EmailPage";
import ContactList from "../components/contactList/ContactList";

export const PATH = {
    LOGIN: '/',
    HOME: '/contacts',
    CREATE: '/contacts/create',
    EDIT: '/contacts/edit',
    EMAIL: '/contacts/email'
}

const Routes = () => {

    return (
            <Switch>
                <Route exact path={PATH.LOGIN} component={MainPage}/>
                <Route exact path={PATH.HOME} component={ContactList}/>
                <Route exact path={PATH.CREATE} component={AddPage}/>
                <Route exact path={PATH.EMAIL} component={EmailPage}/>
                <Route exact path={`${PATH.EDIT}/:id`} component={EditPage}/>
            </Switch>
    );
};

export default Routes;
