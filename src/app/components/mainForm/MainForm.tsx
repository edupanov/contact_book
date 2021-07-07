import React from 'react';
import MainFormBottom from "./MainFormBottom";
import ContactList from "../contactList/ContactList";


function MainForm() {

    return (
        <div>
            <ContactList/>
            <MainFormBottom/>
        </div>
    );
}

export default MainForm