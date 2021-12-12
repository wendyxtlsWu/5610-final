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
                    <div className="collapse navbar-collapse nav-margin" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-margin">
                            <li className="nav-item item-margin">
                                <a className="nav-link active" aria-current="page" href="#">Login</a>
                            </li>
                            <li className="nav-item item-margin">
                                <a className="nav-link" href="#">Signup</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Contact</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}

export default NavbarComponent
