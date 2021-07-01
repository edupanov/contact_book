import React from 'react';
import {Checkbox} from "@material-ui/core";
import style from "./User.module.scss";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "AAA",
            date: "01.01.2021",
            address: "Gomel",
            company: "Bostil"
        }
    }
    render() {
        return (
            <div className={style.user}>
                <Checkbox
                    color="primary"
                />
                <div className={style.userInfo}>
                    <span>{this.state.fullName}</span>
                    <span>{this.state.date}</span>
                    <span>{this.state.address}</span>
                    <span>{this.state.company}</span>
                </div>
            </div>
        );
    }
}

export default User;