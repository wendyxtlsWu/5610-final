import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import NavbarComponent from "../navbar/navbarComponent";
import PetDetailComponent from "../petDetail/petDetailComponent";
import LoginComponent from "../loginAndRegister/loginComponent";
import RegisterComponent from "../loginAndRegister/registerComponent";

import {logout, getProfile} from "../../service/userService";
import HomePage from "../home/homePage";
import ProfilePageComponent from "../users/ProfilePageComponent";
import UserProfileComponent from "../users/UserProfileComponent";
import SearchComponent from "../search/searchComponent";
import * as qs from "query-string";
import PrivacyComponent from "../navbar/privacyComponent";



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

                    <Route path={["/", "/home"]} exact={true} render={(props) =>
                        <HomePage {...props} currentUser={this.state.currentUser}/>
                        // <homePage
                        //     {...props}
                        //     currentUser={this.state.currentUser}/>
                    }/>

                    {/*<Route path="/" >*/}
                    {/*    <FooterComponent/>*/}
                    {/*</Route>*/}

                    {/*// pass the props and the setCurrentUser function to components*/}
                    <Route path={"/login"} exact={true} render={(props) =>
                        <LoginComponent
                            {...props}
                            setCurrentUser = {this.setCurrentUser}/>}/>

                    <Route path="/register" exact={true} render={(props) =>
                        <RegisterComponent
                            {...props}
                            setCurrentUser={this.setCurrentUser}/>}/>

                    <Route path="/search" render={(props) =>

                        <SearchComponent
                            {...props}
                            type={qs.parse(props.location.search).type === undefined ? '': qs.parse(props.location.search).type}
                            name={qs.parse(props.location.search).name === undefined ? '': qs.parse(props.location.search).name}
                            age={qs.parse(props.location.search).age === undefined ? '': qs.parse(props.location.search).age}
                            gender={qs.parse(props.location.search).gender === undefined ? '': qs.parse(props.location.search).gender}
                            size={qs.parse(props.location.search).size === undefined ? '': qs.parse(props.location.search).size}
                            />

                    }/>


                    <Route path="/profile" exact={true} render={(props) =>
                        <ProfilePageComponent
                            {...props}
                            userId={this.state.currentUser.userId}
                            setCurrentUser={this.setCurrentUser}/>}/>

                    <Route path="/details/:id" exact={true} render={(props) =>
                        <PetDetailComponent
                            {...props}
                            currentUser={this.state.currentUser}
                            id={props.match.params.id}
                        />}/>

                    <Route path="/profile/:uid" exact={true} render={(props) =>
                        <UserProfileComponent
                            {...props}
                            userId={props.match.params.uid}
                            currentUserId={this.state.currentUser.userId}/>}/>

                    <Route path="/privacy" exact={true} render={(props) =>
                        <PrivacyComponent
                            {...props}
                        />}/>

                </div>
            </BrowserRouter>

        )
    }

}

export default Clicked
