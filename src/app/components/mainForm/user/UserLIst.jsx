import React, {Component} from 'react';
import style from "../MainForm.module.scss"
import UserListItem from "../../contactList/chunks/ContactListItem";
import {addUsers} from "./action";
import {connect} from "react-redux";
import {RequestSender} from "../../../shared/services/requestSenderService/requestSender";


class UserLIst extends Component {

    constructor(props) {
        super(props);
        this.getUsers = props.getUsers.bind(this)
        console.log(props)
    }

    componentDidMount = () => {
        RequestSender.get('http://localhost:8080/api/users')
            .then(async res => {
                const response = await res.json()
                console.log(this.props)
                this.props.getUsers(response.users)
            })
    }


    render() {

        return (
            <div className={style.wrapper}>
                {
                    this.props.userList ? this.props.userList.map((user, index) => {
                        return <UserListItem  user={user} key={index + 'userList'} />
                    }) : null
                }
            </div>
        );
    }
}

const mapDispatch = (dispatch) => ({
    getUsers: users => dispatch(addUsers(users)),
})

const mapState = (state) => ({
    userList: state.user.userList
})


export default connect(mapState, mapDispatch)(UserLIst);