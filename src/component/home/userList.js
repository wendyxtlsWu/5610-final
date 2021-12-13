import React from 'react';
import {getMembers} from "../../service/userService"

class UserList extends React.Component {
    componentDidMount() {
        getMembers().then(userList => {
                console.log(userList);
                this.setState({
                    users: userList
                });
            }
        )
    }

    state = {
        users: []
    }

    checkLogin = (userId) => {
        if (this.props.currentUser.id === userId)
            this.props.history.push("/profile")
        else if (this.props.currentUser.name !== '')
            this.props.history.push("/profile/" + userId)
    }

    render() {
        return (
            <div className="mt-1 rounded">
                <h4 style={{fontFamily: 'Oswald', fontWeight: '500'}}>New Users</h4>
                <ul className="list-group mx-3">
                    {
                        this.state.users && this.state.users.map((user, i) =>
                            <li className="list-group-item" key={i}>
                                <span className="btn float-left" onClick={() => this.checkLogin(user[0])}>
                                    <i className="fa fa-user mr-3"/>{user[1]}
                                </span>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default UserList