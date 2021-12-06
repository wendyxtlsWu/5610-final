import React from 'react';
import petDetail from './petDetail.css';
import NavbarComponent from "../navbar/navbarComponent";
import service from "../../service/reviewService";
import service2 from "../../service/applicationService";

class PetDetailComponent extends React.Component {
    state = {
        details: {},
        reviews: [],
        yourRating: 5,
        yourComment: "No comments",
        applications:[]
    }

    componentDidMount() {
        // findDetailById(this.props.id)
        //     .then(response => this.setState({
        //         details: response
        //     }))
        this.findReviews();
        this.findApplications();
    }

    findReviews = () => {
        service.findReviews().then(reviews => this.setState({
            reviews: reviews
        }))
    }

    findApplications = () => {
        service2.findApplications().then(applications => this.setState({
            applications: applications
        }))
    }

    createNewReview = (review) => {
        service.createReview("p7", review)
            .then(actual => {
                return this.findReviews()
            })
    }

    createNewApplication = (application) => {
        service2.createApplication("p7", application)
            .then(actual => {
                return this.findApplications()
            })
    }


    render() {
        return(
            <div className="container-fluid">
                <NavbarComponent/>
                <div className="bottom">
                    <div className="row">
                        <div className="col-9">
                            <div className="card">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0"
                                            className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1068867780%2F960x0.jpg%3Ffit%3Dscale" alt="First slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src="https://i.guim.co.uk/img/media/03734ee186eba543fb3d0e35db2a90a14a5d79e3/0_173_5200_3120/master/5200.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9c30ed97ea8731f3e2a155467201afe3" alt="Second slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src="https://www.burgesspetcare.com/wp-content/uploads/2019/11/pets.jpg" alt="Third slide"/>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                                       data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                       data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and
                                        make up the bulk of the card's content.</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item">Vestibulum at eros</li>
                                </ul>

                            </div>
                            <h4 className="review-title">Reviews</h4>
                            <div className="row">
                                {
                                    this.state.reviews.length === 0 &&
                                    <p className="ml-5">No Review</p>
                                }
                                {
                                    this.state.reviews && this.state.reviews.map((review, i) =>
                                <div className="col-sm-4 card-bottom-margin" key={i}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{review.username}</h5>
                                            <h6 className="card-subtitle">{review.rating}</h6>
                                            <p className="card-text">{review.content}</p>

                                            <a href="#" className="btn btn-primary">Go somewhere</a>

                                        </div>
                                    </div>
                                </div>)
                                }
                            </div>
                            <div className="row">
                                <form className="col-5">
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Rate</label>
                                        <select className="form-control" id="exampleFormControlSelect1"
                                                onChange={(e) => {
                                                    const rating = e.target.value
                                                    this.setState({
                                                        yourRating: rating
                                                    })
                                                }}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
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


                                        userId: 2,
                                        username: "hiiii",
                                        businessTitle: "dog",
                                        rating: this.state.yourRating,
                                        content: this.state.yourComment,
                                        businessUrl: "love"})}>
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="col-3">
                            {
                                this.state.applications.length === 0 &&
                                    <p className="ml-5">No Applications</p>
                            }

                            { this.state.applications.length !== 0 && this.state.applications.map((application, i) =>

                                <a className="list-group-item">{application.username}</a>)

                            }
                            <button className="apply-button btn-primary"
                                    onClick={() => this.createNewApplication({
                                        userId: 2,
                                        username: "hiiii",
                                        businessTitle: "dog"})}>

                            apply now</button>
                        </div>
                    </div>

                </div>

            </div>

        );
    }

}

export default PetDetailComponent;
