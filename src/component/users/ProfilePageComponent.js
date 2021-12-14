import React from 'react';
import ReviewListComponent from "../reviews/ReviewListComponent";
import {getProfile, updateProfile} from "../../service/userService";
import ApplicationListVolunteer from "../applications/ApplicationListVolunteer";
import ApplicationListAll from "../applications/ApplicationListAll";

class ProfilePageComponent extends React.Component {
    componentDidMount() {
        getProfile().then(profile => {
                if (profile === undefined) {
                    alert('No such user, navigating back to homepage.')
                    this.props.history.push('/')
                } else {
                    console.log('getProfile:', profile);
                    this.setState((prevState) => ({
                        ...prevState,
                        currentUser: profile,
                    }))
                }
            }
        );
    }

    state = {
        editing: false,
        currentUser: {
            userId: '',
            username: '',
            email: '',
            zipCode: '',
            userType: "",
        }
    }

    editProfile = () => {
        this.setState(prevState => ({
            ...prevState,
            editing: true,
        }))
    }

    saveProfile = () => {
        updateProfile(this.state.currentUser)
            .then(status =>
                this.setState({
                    editing: false
                }))
        this.props.setCurrentUser(this.state.currentUser)
    }

    render() {
        return (
            <div className="container mt-4" style={{padding: 3}}>
                <h1 style={{fontFamily: 'Fantasy'}}>My Profile</h1>
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-5">
                        <div className="row">
                            <h3 className="text-left ml-1 mt-3"
                                style={{
                                    fontFamily: 'Monospace',
                                    fontWeight: '500'
                                }}>{this.state.currentUser.username}</h3>
                            {
                                !this.state.editing &&
                                <span className="btn btn-outline-info ml-2 mb-3" style={{fontSize: '1rem'}}
                                      onClick={this.editProfile}><i className="fa fa-edit"/></span>
                            }
                            {
                                this.state.editing &&
                                <span className="ml-2 btn btn-success mb-3"
                                      onClick={this.saveProfile}>Save</span>
                            }
                        </div>
                        <form>
                            <div className="form-group row mb-3">
                                <label className="col-md-4 col-form-label text-left"
                                       style={{fontFamily: 'Serif', fontSize: '1.5rem'}}>User Name: </label>
                                <div className="col-md-8">
                                    {
                                        this.state.editing &&
                                        <input type="text" className="form-control"
                                               value={this.state.currentUser.username}
                                               onChange={(e) => {
                                                   const newUsername = e.target.value
                                                   this.setState(prevState => ({
                                                       ...prevState,
                                                       currentUser: {
                                                           ...prevState.currentUser,
                                                           username: newUsername
                                                       }
                                                   }))
                                               }}
                                        />
                                    }
                                    {
                                        !this.state.editing &&
                                        <input type="text" className="form-control"
                                               value={this.state.currentUser.username} disabled/>
                                    }
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                                <label className="col-md-4 col-form-label text-left"
                                       style={{fontFamily: 'Serif', fontSize: '1.5rem'}}>Email: </label>
                                <div className="col-md-8">
                                    {
                                        this.state.editing &&
                                        <input type="text" className="form-control" value={this.state.currentUser.email}
                                               onChange={(e) => {
                                                   const newEmail = e.target.value
                                                   this.setState(prevState => ({
                                                       ...prevState,
                                                       currentUser: {
                                                           ...prevState.currentUser,
                                                           email: newEmail
                                                       }
                                                   }))
                                               }}/>
                                    }
                                    {
                                        !this.state.editing &&
                                        <input type="text" className="form-control" value={this.state.currentUser.email}
                                               disabled/>
                                    }
                                </div>
                            </div>
                            <div className="form-group row mb-3">
                                <label className="col-md-4 col-form-label text-left"
                                       style={{fontFamily: 'Serif', fontSize: '1.5rem'}}>Zip Code: </label>
                                <div className="col-md-8">
                                    {
                                        this.state.editing &&
                                        <input type="text" className="form-control"
                                               value={this.state.currentUser.zipCode}
                                               onChange={(e) => {
                                                   const newZipCode = e.target.value
                                                   this.setState(prevState => ({
                                                       ...prevState,
                                                       currentUser: {
                                                           ...prevState.currentUser,
                                                           zipCode: newZipCode
                                                       }
                                                   }))
                                               }}/>
                                    }
                                    {
                                        !this.state.editing &&
                                        <input type="text" className="form-control"
                                               value={this.state.currentUser.zipCode}
                                               disabled/>
                                    }
                                </div>
                            </div>
                            <div>
                                <div className="form-group row mb-3">
                                    <label className="col-md-4 col-form-label text-left"
                                           style={{fontFamily: 'Serif', fontSize: '1.5rem'}}>User Type: </label>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" value={
                                            (this.state.currentUser.userType === "ADOPTER" && "Adopter") ||
                                            (this.state.currentUser.userType === "VOLUNTEER" && "Volunteer") ||
                                            (this.state.currentUser.userType === "SHELTER/RESCUE" && "Shelter/Rescue")
                                        } disabled/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="mt-3 col-12 col-md-8 col-lg-7">
                        {
                            this.state.currentUser.userType === "VOLUNTEER" &&
                            <ReviewListComponent
                                history={this.props.history}
                                userId={this.state.currentUser.userId}
                                ownPage={true}/>
                        }
                        {
                            this.state.currentUser.userType === "SHELTER/RESCUE" &&
                            <ApplicationListAll
                                history={this.props.history}
                                userId={this.state.currentUser.userId}
                                ownPage={true}
                            />
                        }
                        {
                            this.state.currentUser.userType === "ADOPTER" &&
                            <ApplicationListVolunteer
                                history={this.props.history}
                                userId={this.state.currentUser.userId}
                                ownPage={true}
                            />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfilePageComponent;
