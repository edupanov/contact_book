import React, {Component} from 'react';
import style from "./MainForm.module.scss"
import User from "./User";

class MainForm extends Component {
    render() {


        return (
            <div className={style.wrapper}>
                <User/>
                <User/>
                <User/>
            </div>
        );
    }
}

export default MainForm;