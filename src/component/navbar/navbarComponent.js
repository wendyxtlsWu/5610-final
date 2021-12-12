import React from 'react';
import nabar from './navbar.css';


class NavbarComponent extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand nav-margin" href="#">Clicked</a>
                    {   this.props.currentUser.username === '' &&
                        <div className="collapse navbar-collapse nav-margin" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-margin">
                                <li className="nav-item item-margin">
                                    <a className="nav-link active" aria-current="page" href="/login">Login</a>
                                </li>
                                <li className="nav-item item-margin">
                                    <a className="nav-link" href="/register">Signup</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Contact</a>
                                </li>
                            </ul>
                        </div>
                    }
                    {
                        this.props.currentUser.username !== '' &&
                        <div className="dropdown show">
                            <button className="btn btn-secondary dropdown-toggle ml-1" type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="">
                                    Hello {this.props.currentUser.username}
                                </span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/profile">Profile</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/" onClick={this.props.handleLogout}>Log out</a>
                            </div>
                        </div>
                    }
                </div>
            </nav>
        )
    }
}

export default NavbarComponent
