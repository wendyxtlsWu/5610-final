import React from 'react';
import {register} from "../../service/userService";

class RegisterComponent extends React.Component {
    state = {
        user: {
            username: '',
            password: '',
            email: '',
            zipCode: '',
            userType: 'ADOPTER'
        }
    }
    handleRegister = (user) => {
        if(this.state.user.username === ''){
            alert('Username is required')
            return
        }
        if (this.state.user.password === ''){
            alert('Password is required')
            return
        }
        register(user)
            .then(newUser => {
                // console.log(newUser)
                if (newUser.status === 400){
                    this.props.history.push('/register')
                }
                else{
                    this.props.setCurrentUser(newUser)
                    this.props.history.goBack()
                }
            })
    }

    render() {
        return (
            <div className=" d-flex justify-content-center">
                <div className="" style={{
                    backgroundImage:`url('https://www.greensgroup.co.uk/img/green-pets-main-image2.jpg')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height:"100vh",
                    width:'100vw',
                    backgroundSize: "cover"
                }}>
                    <div className="d-flex justify-content-center align-content-center">
                        <div className="container mt-0 bg-white rounded align-content-center" style={{ width:'50%', height:'50%'}}>
                            <h3 className="text-black-50 text-center p-3">Create an Account</h3>
                            <span>Username</span>
                            <input value={this.state.user.username} placeholder="Username" className="form-control border"
                                   onChange={(e) => {
                                       const newUserName = e.target.value
                                       this.setState(prevState => ({
                                           user: {
                                               ...prevState.user,
                                               username: newUserName
                                           }
                                       }))
                                   }
                                   }/>
                            <br/>
                            <span>Password</span>
                            <input value={this.state.user.password} placeholder="Password" type="password" className="form-control border"
                                   onChange={(e) => {
                                       const newPassword = e.target.value
                                       this.setState(prevState => ({
                                           user: {
                                               ...prevState.user,
                                               password: newPassword
                                           }
                                       }))
                                   }
                                   }/>
                            <br/>
                            {/*<input value={this.state.user.validatePassword} placeholder="Verify Password" type="password"*/}
                            {/*       className="form-control"*/}
                            {/*       onChange={(e) => {*/}
                            {/*           const newValidatePassword = e.target.value*/}
                            {/*           this.setState(prevState => ({*/}
                            {/*               user: {*/}
                            {/*                   ...prevState.user,*/}
                            {/*                   validatePassword: newValidatePassword*/}
                            {/*               }*/}
                            {/*           }))*/}
                            {/*       }*/}
                            {/*       }/>*/}
                            {/*<br/>*/}
                            {/*{*/}
                            {/*    this.state.user.password !== this.state.user.validatePassword &&*/}
                            {/*    <p style={{color: "red"}}>*/}
                            {/*        Please verify password*/}
                            {/*    </p>*/}
                            {/*}*/}
                            <span>Email Address</span>
                            <input value={this.state.user.email} placeholder="Email" type="email" className="form-control border"
                                   onChange={(e) => {
                                       const newEmail = e.target.value
                                       this.setState(prevState => ({
                                           user: {
                                               ...prevState.user,
                                               email: newEmail
                                           }
                                       }))
                                   }
                                   }/>
                            <br/>
                            <span>Zip Code (5 digits)</span>
                            <input value={this.state.user.zipCode} placeholder="Zip code" type="zipCode" className="form-control border"
                                   onChange={(e) => {
                                       this.setState(prevState => ({
                                           user: {
                                               ...prevState.user,
                                               zipCode: e.target.value
                                           }
                                       }))
                                   }
                                   }/>
                            <br/>

                            <span>What brought you to Clicked?</span>
                            <select
                                className="custom-select border"
                                onChange={(e) => {
                                    const newRole = e.target.value
                                    this.setState(prevState => ({
                                        user: {
                                            ...prevState.user,
                                            userType: newRole
                                        }
                                    }))
                                }}>
                                <option value={"ADOPTER"}>Looking for a new four-legged family member? (Potential adopter)</option>
                                <option value={"VOLUNTEER"}>Looking for opportunities to help four-legged friends? (Volunteer)</option>
                                <option value={"SHELTER/RESCUE"}>Helping those four-legged cuties find forever homes? (Shelter/Rescue)</option>
                            </select>
                            <div className="text-black mt-3">Already have an account?<a href={"/login"}> Log in</a> </div>
                            <div className="text-black mt-3">By clicking register you are agreeing
                                to the terms of use and acknowledging the <a href={"/privacy"}> Privacy Policy</a> </div>

                            <div className="row mt-3 d-flex justify-content-center" >
                                <button className="btn btn-primary"
                                        onClick={() => {
                                            // if (this.state.user.password === this.state.user.validatePassword) {
                                                this.handleRegister(this.state.user)
                                            // }
                                        }}>Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterComponent;
