import React from 'react';
import ReviewListComponent from "../reviews/ReviewListComponent";
import {getUserProfile} from "../../service/userService";
import {findReviewsForUser} from "../../service/reviewService";
import ApplicationListVolunteer from "../applications/ApplicationListVolunteer";
import ApplicationListAll from "../applications/ApplicationListAll";

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
            <div className="container mt-4" style={{padding: 1.5 + 'em'}}>
                <h1 style={{fontFamily: 'Fantasy'}}>Profile</h1>
                <div className="row mt-3">
                    <div className="col-md-2 d-none d-md-block px-0"/>
                    <div className="col-sm-12 col-md-8 px-0">
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-5">
                                <h1 className="text-left">{this.state.profile.username}</h1>
                                <form>
                                    <fieldset disabled>
                                        <div className="form-group row mb-2">
                                            <label className="col-md-4 col-form-label text-left">User Name: </label>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={this.state.profile.username}/>
                                            </div>
                                        </div>
                                        <div className="form-group row mb-2">
                                            <label className="col-md-4 col-form-label text-left">User Type: </label>
                                            <div className="col-md-8">
                                                <input type="text" className="form-control" value={
                                                    (this.state.profile.userType === "ADOPTER" && "Adopter") ||
                                                    (this.state.profile.userType === "VOLUNTEER" && "Volunteer") ||
                                                    (this.state.profile.userType === "SHELTER/RESCUE" && "Shelter/Rescue")
                                                }/>
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            <div className="col-sm-12 col-md-8 col-lg-7">
                                {
                                    this.state.profile.userType === "ADOPTER" &&
                                    <ReviewListComponent
                                        history={this.props.history}
                                        userId={this.props.userId}
                                        ownPage={false}/>
                                }
                                {
                                    this.state.profile.userType === "SHELTER/RESCUE" &&
                                    <ApplicationListAll
                                        history={this.props.history}
                                        userId={this.state.profile.userId}
                                        ownPage={false}
                                    />
                                }
                                {
                                    this.state.profile.userType === "VOLUNTEER" &&
                                    <ApplicationListVolunteer
                                        userType={this.state.profile.userType}
                                        userId={this.state.profile.userId}
                                        ownPage={false}/>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 d-none d-md-block px-0"/>
                </div>
            </div>
        )
    }
}

export default UserProfileComponent;
