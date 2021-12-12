import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import NavbarComponent from "../navbar/navbarComponent";
import PetDetailComponent from "../petDetail/petDetailComponent";
import LoginComponent from "../loginAndRegister/loginComponent";
import RegisterComponent from "../loginAndRegister/registerComponent";

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

    // handleLogout = () => {
    //     logout().then(() =>
    //         this.setCurrentUser({
    //             userId: '',
    //             username: '',
    //             email: '',
    //             zipCode: '',
    //             userType: ''
    //         })
    //     )
    // }

    setCurrentUser = (user) => {
        this.setState({
            currentUser: user
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid" style={{width: '100%', height: '100%'}}>
                    <Route path="/">
                         <NavbarComponent/>
                    </Route>
                    {/*// pass the props and the setCurrentUser function to components*/}
                    <Route path={"/login"} exact={true} render={(props) =>
                        <LoginComponent {...props} setCurrentUser = {this.setCurrentUser}/>}/>

                    <Route path="/register" exact={true} render={(props) =>
                        <RegisterComponent
                            {...props}
                            setCurrentUser={this.setCurrentUser}/>}/>

                    <Route path="/details" exact={true}>
                        <PetDetailComponent/>
                    </Route>

                </div>
            </BrowserRouter>

        )
    }

}

export default Clicked
