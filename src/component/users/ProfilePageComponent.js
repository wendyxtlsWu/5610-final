import React from 'react';
import {getProfile, updateProfile} from "../../service/userService";

class currentUserPageComponent extends React.Component {
    componentDidMount() {
        getProfile().then(profile =>{
            if(profile === undefined){
                alert('No such user, navigating back to homepage.')
                this.props.history.push('/')
            }
            this.setState({
                  currentUser: profile
              })}
        )
    }

    state = {
        editing: false,
        currentUser: {}
    }

    editProfile = () => {
        this.setState(prevState => ({
            editing: true
        }))
    }

    saveProfile = () => {
        updateProfile(this.state.currentUser)
            .then(this.setState( {
                                     editing: false
                                 }))
        this.props.setCurrentUser(this.state.currentUser)
    }

    render() {
        return (
            <div className="container mt-4" style={{padding: 1.5 + 'em'}}>
                <h1 style={{fontFamily: 'Nunito'}}>Profile</h1>
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="row">
                            <h3 className="text-left ml-1" style={{fontFamily: 'Oswald', fontWeight: '500'}}>{this.state.currentUser.username}</h3>
                            {
                                !this.state.editing &&
                                <span className="btn btn-outline-info ml-2 mb-2" style={{fontSize: '0.8rem'}}
                                      onClick={this.editProfile}><i className="fa fa-edit"/></span>
                            }
                            {
                                this.state.editing &&
                                <span className="ml-2 btn btn-success mb-2"
                                      onClick={this.saveProfile}>Save</span>
                            }
                        </div>
                        <form>
                            <div className="form-group row mb-2">
                                <label className="col-md-4 col-form-label text-left">User's Info: </label>
                                <div className="col-md-8">
                                    <input type="text" className="form-control" value={
                                        (this.state.currentUser.role === "ADOPTER" && "Adopter") ||
                                        (this.state.currentUser.role === "VOLUNTEER" && "Volunteer") ||
                                        (this.state.currentUser.role === "SHELTER" && "Shelter")
                                    } disabled/>
                                </div>
                            </div>

                            <div className="form-group row mb-2">
                                <label className="col-md-4 col-form-label text-left">First Name: </label>
                                <div className="col-md-8">
                                    {
                                        this.state.editing &&
                                        <input type="text" className="form-control" value={this.state.currentUser.firstName}
                                               onChange={(e) => {
                                                   const newFirstName = e.target.value
                                                   this.setState(prevState => ({
                                                       currentUser: {
                                                           ...prevState.currentUser,
                                                           firstName: newFirstName
                                                       }
                                                   }))
                                               }}
                                        />
                                    }
                                    {
                                        !this.state.editing &&
                                        <input type="text" className="form-control" value={this.state.currentUser.firstName} disabled/>
                                    }
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label className="col-md-4 col-form-label text-left">Last Name: </label>
                                <div className="col-md-8">
                                    {
                                        this.state.editing &&
                                        <input type="text" className="form-control" value={this.state.currentUser.lastName}
                                               onChange={(e) => {
                                                   const newLastName = e.target.value
                                                   this.setState(prevState => ({
                                                       currentUser: {
                                                           ...prevState.currentUser,
                                                           lastName: newLastName
                                                       }
                                                   }))
                                               }}/>
                                    }
                                    {
                                        !this.state.editing &&
                                        <input type="text" className="form-control" value={this.state.currentUser.lastName} disabled/>
                                    }
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <label className="col-md-4 col-form-label text-left">Email: </label>
                                <div className="col-md-8">
                                    {
                                        this.state.editing &&
                                        <input type="text" className="form-control" value={this.state.currentUser.email}
                                               onChange={(e) => {
                                                   const newEmail = e.target.value
                                                   this.setState(prevState => ({
                                                       currentUser: {
                                                           ...prevState.currentUser,
                                                           email: newEmail
                                                       }
                                                   }))
                                               }}/>
                                    }
                                    {
                                        !this.state.editing &&
                                        <input type="text" className="form-control" value={this.state.currentUser.email} disabled/>
                                    }
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="col-sm-12 col-md-8">
                        Adopter / Volunteer / Shelter
                        {/*{this.state.currentUser.role === "CUSTOMER" &&*/}
                        {/* <ReviewListComponent*/}
                        {/*     history={this.props.history}*/}
                        {/*     userId={this.state.currentUser.id}*/}
                        {/*     ownPage={true}/>*/}
                        {/*}*/}
                        {/*{this.state.currentUser.role === "OWNER" &&*/}
                        {/* <LocalBusinessListComponent*/}
                        {/*     ownerId={this.state.currentUser.id}*/}
                        {/*     ownPage={true}/>*/}
                        {/*}*/}
                    </div>
                </div>


            </div>
        )
    }
}

export default currentUserPageComponent;
