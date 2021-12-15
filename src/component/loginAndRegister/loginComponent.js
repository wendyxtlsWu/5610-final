import React from 'react';
import {login} from "../../service/userService";
// import FooterComponent from "../navbar/footerComponent";


class LoginComponent extends React.Component {
    handleLogin = (user) =>
        login(user)
            .then(currentUser => {
                if (currentUser != null) {
                    // after the user logged in, update current user and make it accessible to all other components
                    this.props.setCurrentUser(currentUser);
                    this.props.history.goBack();
                }
            })

    state = {
        user: {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div className={"d-flex justify-content-center"}>
                <div className="" style={{
                    backgroundImage:`url('https://www.greensgroup.co.uk/img/green-pets-main-image2.jpg')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height:"100vh",
                    width:'100vw',
                    backgroundSize: "cover"
                }}>

                        <div className="row d-flex justify-content-center align-items-center  m-5 p-5">


                            <div className="row col-sm-12 col-md-8 bg-white rounded">
                                <h3 className="text-black-50 text-center p-3">Log in</h3>
                                <form>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label text-black px-2">Username:</label>
                                        <div className="col-sm-10"   >
                                            <input className="form-control border" value={this.state.user.username} placeholder="Username" type="username"
                                                   onChange={(event) => {
                                                       this.setState(prevState => ({
                                                           user: {
                                                               ...prevState.user,
                                                               username: event.target.value
                                                           }
                                                       }))
                                                   }}/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label text-black px-2">Password:</label>
                                        <div className="col-sm-10" >
                                            <input className="form-control border" value={this.state.user.password} placeholder="Password" type="password"
                                                   onChange={(event) => {
                                                       this.setState(prevState => ({
                                                           user: {
                                                               ...prevState.user,
                                                               password: event.target.value
                                                           }
                                                       }))
                                                   }}/>
                                        </div>
                                    </div>
                                </form>
                                <div className="text-center">Need an account?<a href={"/register"}>  Sign up</a></div>
                                <div className="row d-flex justify-content-center m-0 p-3">
                                    <button className="btn btn-success" onClick={() => this.handleLogin(this.state.user)}>Login</button>
                                </div>
                            </div>

                        </div>

                </div>

            </div>

        )
    }
}

export default LoginComponent;
