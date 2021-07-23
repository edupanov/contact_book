import React from 'react';
import {Route, Switch} from "react-router-dom";
import EditPage from "../components/pages/editPage/EditPage";
import AddPage from "../components/pages/addPage/AddPage";
import MainPage from "../components/pages/mainPage/MainPage";

export const PATH = {
    HOME: '/contacts',
    CREATE: '/contacts/create',
    EDIT: '/contacts/edit',
}

const Routes = () => {

    return (
        <div>
            <Switch>
                <Route exact path={PATH.HOME} component={MainPage}/>
                <Route exact path={PATH.CREATE} component={AddPage}/>
                <Route exact path={PATH.EDIT}  component={EditPage}/>
            </Switch>
        </div>
    );
};

export default Routes;
