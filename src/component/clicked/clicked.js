import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import NavbarComponent from "../navbar/navbarComponent";
import PetDetailComponent from "../petDetail/petDetailComponent";
import LoginComponent from "../loginAndRegister/loginComponent";
import RegisterComponent from "../loginAndRegister/registerComponent";

import {logout, getProfile} from "../../service/userService";
import homePage from "../home/homePage";
import ProfilePageComponent from "../users/ProfilePageComponent";

import SearchComponent from "../search/searchComponent";


class Clicked extends React.Component {
    state = {
        currentUser: {
            userId: '',
            username: '',
            email: '',
            zipCode: '',
            userType: ''
        }
    }

    componentDidMount() {
        getProfile().then((user) => {
                if (user !== null)
                    this.setCurrentUser(user)
            }
        )
    }

    handleLogout = () => {
        logout().then(() =>
            this.setCurrentUser({
                userId: '',
                username: '',
                email: '',
                zipCode: '',
                userType: ''
            })
        )
    }

    setCurrentUser = (user) => {
        this.setState({
            currentUser: user
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid" style={{width: '100%', height: '100%'}}>
                    <Route path="/" render={(props) =>
                        <NavbarComponent
                            {...props}
                            currentUser={this.state.currentUser}
                            handleLogout={this.handleLogout}/>}/>

                    <Route path="/" exact={true} render={(props) =>
                        <homePage
                            {...props}
                            currentUser={this.state.currentUser}/>}/>

                    {/*// pass the props and the setCurrentUser function to components*/}
                    <Route path={"/login"} exact={true} render={(props) =>
                        <LoginComponent {...props} setCurrentUser = {this.setCurrentUser}/>}/>

                    <Route path="/register" exact={true} render={(props) =>
                        <RegisterComponent
                            {...props}
                            setCurrentUser={this.setCurrentUser}/>}/>
                    <Route path="/search" render={(props) =>
                        <SearchComponent
                            {...props}
                            />}/>
                    {/*keyword={props.match.params.keyword === undefined ? '': props.match.params.keyword}*/}
                    {/*location={props.match.params.location === undefined ? '': props.match.params.location}*/}

                    <Route path="/profile" exact={true} render={(props) =>
                        <ProfilePageComponent
                            {...props}
                            userId={this.state.currentUser.id}
                            setCurrentUser={this.setCurrentUser}/>}/>

                    <Route path="/details/:id" exact={true} render={(props) =>
                        <PetDetailComponent
                            {...props}
                            currentUser={this.state.currentUser}
                            id={props.match.params.id}
                        />}/>


                </div>
            </BrowserRouter>

        )
    }

}

export default Clicked
