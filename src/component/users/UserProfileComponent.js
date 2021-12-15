import React from 'react';
import "./profile.css"
import {getUserProfile} from "../../service/userService";
import {findReviewsForUser} from "../../service/reviewService";
import {Link} from "react-router-dom";

class UserProfileComponent extends React.Component {
    componentDidMount() {
        console.log('The chosen user ID:', this.props.userId);
        getUserProfile(this.props.userId).then(profile => {
            findReviewsForUser(this.props.userId)
                .then(reviews => {
                    if (profile === undefined) {
                        alert('No such user, navigating back to homepage.')
                        this.props.history.push('/')
                    }
                    console.log('Get user profile by ID:', profile);
                    console.log('Find reviews for user:', reviews);
                    this.setState({
                        profile: profile,
                        reviews: reviews
                    })
                })
        });
    }

    state = {
        profile: {},
        reviews: []
    }

    render() {
        return (
            <div className="container mt-4" style={{padding: 3}}>
                <div>
                    <Link to={'/profile'} className="back-button">
                        BACK TO MY PROFILE
                    </Link>
                    <h1 className="profile">{this.state.profile.username}'s profile</h1>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-5">
                        <div className="row mb-3">
                            <form>
                                <fieldset disabled>
                                    <div className="form-group row profile-user-info-form">
                                        <label className="col-sm-4 col-form-label text-left">User Name: </label>
                                        <div className="col-sm-8 profile-user-info-input">
                                            <input type="text"
                                                   className="form-control profile-user-info-input"
                                                   style={{fontSize: '25px'}}
                                                   value={this.state.profile.username}/>
                                        </div>
                                    </div>
                                    <div className="form-group row profile-user-info-form">
                                        <label className="col-sm-4 col-form-label text-left">Email: </label>
                                        <div className="col-sm-8 profile-user-info-input">
                                            <input type="text"
                                                   className="form-control profile-user-info-input"
                                                   style={{fontSize: '25px'}}
                                                   value={this.state.profile.email}/>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-2 profile-user-info-form">
                                        <label className="col-sm-4 col-form-label text-left">User Type: </label>
                                        <div className="col-sm-8">
                                            <input type="text"
                                                   className="form-control profile-user-info-input"
                                                   style={{fontSize: '25px'}}
                                                   value={
                                                       (this.state.profile.userType === "ADOPTER" && "Adopter") ||
                                                       (this.state.profile.userType === "VOLUNTEER" && "Volunteer") ||
                                                       (this.state.profile.userType === "SHELTER/RESCUE" && "Shelter/Rescue")
                                                   }/>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="mt-3 col-12 col-md-8 col-lg-7"/>
            </div>
        )
    }
}

export default UserProfileComponent;
