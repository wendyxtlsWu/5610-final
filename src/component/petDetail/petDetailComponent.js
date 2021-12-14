import React from 'react';
import petDetail from './petDetail.css';
import reviewService from "../../service/reviewService";
import applicationService from "../../service/applicationService";
import petService from "../../service/petService";

class PetDetailComponent extends React.Component {
    state = {
        details: {},
        reviews: [],
        yourComment: "No comments",
        applications:[],
        localDetails: {},
        accessToken: null,
    }

    // constructor(props) {
    //     super(props);
    //     petService.findDetailById(this.props.id)
    //         .then(response => this.setState({
    //             details: response
    //         }))
    // }


    componentDidMount() {
        // petService.findLocalDetailById(this.props.id)
        //     .then(response => this.setState({
        //         localDetails: response
        //     }))


        petService.findDetailById(this.props.id)
            .then(response => this.setState({
                details: response.data.animal
            }))

        this.findReviewsForPet();
        this.findApplicationsForPet();
    }

    findReviewsForPet = () => {
        reviewService.findReviewsForPet(this.props.id).then(reviews => this.setState({
            reviews: reviews
        }))
    }

    findApplicationsForPet = () => {
        applicationService.findApplicationsForPet(this.props.id)
            .then(applications => this.setState({
                applications: applications
            }))
    }

    createNewReview = (review) => {
        reviewService.createReview(this.props.id, review)
            .then(actual => {
                return this.findReviewsForPet()
            })
    }

    createNewApplication = (application) => {
        applicationService.createApplication(this.props.id, application)
            .then(actual => {
                return this.findApplicationsForPet()
            })
    }

    // gotoProfile = (userId) => {
    //     if(userId === this.props.currentUser.id)
    //         this.props.history.push("/profile")
    //     else
    //         this.props.history.push('/profile/' + userId)
    // }

    render() {
        return(
            <div className="container-fluid">
                <div className="bottom">
                    <div className="row" >
                        <div className="col-9">
                            <div className="card col-margin-left">
                                {/*{console.log("details", this.state.details)}*/}
                                {JSON.stringify(this.state.details) !== '{}' && this.state.details.photos.length > 0 ?
                                    <img className="card-img-top" src={this.state.details.photos[0].large} height="600px"
                                         width="auto"/> :
                                    <img className="card-img-top" src="https://www.burgesspetcare.com/wp-content/uploads/2019/11/pets.jpg"/>}

                                <div className="card-body">
                                    <h5 className="card-title">{this.state.details.name}</h5>
                                    <p className="card-text">{this.state.details.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{this.state.details.type}</li>
                                    <li className="list-group-item">{this.state.details.age}</li>
                                    <li className="list-group-item">{this.state.details.gender}</li>
                                    <li className="list-group-item">{this.state.details.size}</li>
                                </ul>
                            </div>
                            <h4 className="review-title">Reviews</h4>
                            <div className="row">
                                {
                                    this.state.reviews.length === 0 &&
                                    <h4 className="review-title">No Review</h4>
                                }
                                {
                                    this.state.reviews && this.state.reviews.map((review, i) =>
                                    <div className="col-sm-4 card-bottom-margin" key={i}>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {/*<span onClick={() => this.gotoProfile(review.userId)}>*/}
                                                        {review.username}
                                                    {/*</span>*/}
                                                </h5>
                                                <p className="card-text">{review.content}</p>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                            <div className="row">
                                <form className="col-5">
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Comments</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                                  onChange={(e) => {
                                                      const comment = e.target.value
                                                      this.setState({
                                                          yourComment: comment
                                                      })
                                                  }}>
                                        </textarea>
                                    </div>
                                    <button type="submit"
                                            className="btn btn-primary"
                                            onClick={() => this.createNewReview({
                                                userId: this.props.currentUser.id,
                                                username: this.props.currentUser.username,
                                                petTitle: this.state.details.name,
                                                content: this.state.yourComment
                                            })}>
                                            Submit
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="col-3">
                            {
                                // this.state.localDetails.foster &&
                                this.state.applications.length === 0 &&
                                    <p className="ml-5">No Applications</p>
                            }

                            { this.state.applications.length !== 0 && this.state.applications.map((application, i) =>
                                <a className="list-group-item col-margin-right">{application.username}</a>)
                            }

                            {/*{ this.state.localDetails.foster && this.props.currentUser.role === "ADOPTER" && */}
                                <div className="col-margin-right">
                                    <button className="apply-button btn-primary"
                                            onClick={() => this.createNewApplication({
                                                userId: this.props.currentUser.id,
                                                username: this.props.currentUser.username,
                                                petTitle: this.state.details.name
                                            })}>

                                    apply now</button>
                                </div>
                            {/*}*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default PetDetailComponent;
