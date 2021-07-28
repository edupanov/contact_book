import React from 'react';
import {Route, Switch} from "react-router-dom";
import EditPage from "../components/pages/editPage/EditPage";
import AddPage from "../components/pages/addPage/AddPage";
import MainPage from "../components/pages/mainPage/MainPage";
import EmailPage from "../components/pages/emailPage/EmailPage";

export const PATH = {
    HOME: '/contacts',
    CREATE: '/contacts/create',
    EDIT: '/contacts/edit',
    EMAIL: '/contacts/email'
}

const Routes = () => {

    return (
        <div>
            <Switch>
                <Route exact path={PATH.HOME} component={MainPage}/>
                <Route exact path={PATH.CREATE} component={AddPage}/>
                <Route exact path={PATH.EMAIL} component={EmailPage}/>
                <Route exact path={`${PATH.EDIT}/:id`}  component={EditPage}/>
            </Switch>
        </div>
    );
};

export default Routes;
