import React from 'react';
import nabar from './navbar.css';


class NavbarComponent extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <nav id="mainNavbar" className="navbar bg-white navbar-expand-md py-1 px-2">
                <a className="home-title" href="/">Clicked</a>
                <div>
                    <div className="row mr-1">
                        {
                            this.props.currentUser.username === '' &&
                            <span>
                                <a className="btn btn-secondary mx-1" href="/search">Search <i className="fas fa-search fa-lg"></i></a>
                                <a className="btn btn-success mx-1" href="/login">Log in <i className="fa fa-user"/></a>
                                <a className="btn btn-primary mx-1" href="/register">Signup <i
                                    className="fa fa-user-plus"/></a>
                            </span>
                        }

                        {
                            this.props.currentUser.username !== '' &&
                            <div className="btn-group">

                                    <a className="btn btn-secondary mx-1" href="/search">Search <i className="fas fa-search fa-lg"></i></a>

                                <div className="dropdown show">
                                    <button className="btn btn-secondary dropdown-toggle ml-1" type="button"
                                            id="dropdownMenuButton"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="">
                                        Hello {this.props.currentUser.username}
                                        <i className="fa fa-user ml-3"/>

                                    </span>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="/profile">Profile</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="/" onClick={this.props.handleLogout}>Log out</a>
                                    </div>
                                </div>

                            </div>
                        }
                    </div>
                </div>
            </nav>

        )
    }
}

export default NavbarComponent
