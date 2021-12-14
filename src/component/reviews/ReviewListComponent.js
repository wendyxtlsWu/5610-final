import React from "react";
import {Link} from "react-router-dom";
import {findReviewsForUser, updateReview, deleteReview} from "../../service/reviewService";

class ReviewListComponent extends React.Component {

    componentDidMount() {
        console.log(this.props.userId);
        this.findReviewsForUser()
    }

    state = {
        reviews: [],
        editingId: '',
        review: {
            id: '',
            userId: '',
            username: '',
            petId: '',
            petTitle: '',
            petUrl: '',
            // rating: '',
            content: ''
        }
    }

    findReviewsForUser = () => {
        findReviewsForUser(this.props.userId)
            .then(reviews => {
                console.log('Find reviews for user:', reviews);
                this.setState((prevState) => ({
                    ...prevState,
                    reviews: reviews
                }));
            })
    }

    updateReview = (review) => {
        updateReview(review)
            .then(status => {
                this.setState({
                    editingId: ''
                })
                return this.findReviewsForUser()
            })
    }

    deleteReview = (reviewId) => {
        deleteReview(reviewId)
            .then(status => {
                this.setState({
                    editingId: ''
                })
                return this.findReviewsForUser()
            })
    }

    editReview = (review) => {
        this.setState({
            editingId: review.id,
            review: review
        })
    }

    showPet = (pid) => {
        this.props.history.push('/details/' + pid)
    }

    render() {
        return (
            <div className="container mb-5">
                <h3 className="text-left ml-1"
                    style={{fontFamily: 'Arial', fontWeight: '500'}}>Reviews</h3>
                <ul className="list-group">
                    {
                        this.state.reviews && this.state.reviews.length === 0 &&
                        <div className="border rounded d-flex align-items-center justify-content-center"
                             style={{height: '50px'}}>
                            <h5>No Review</h5>
                        </div>
                    }
                    {
                        this.state.reviews && this.state.reviews.map((review, i) =>
                            <div className="card my-2 b-none" key={i}>
                                <div className="row p-2">
                                    <div className="col-md-4">
                                        <Link to={`details/${review.petId}`}>
                                            <img className="rounded" src={review.petImageURL}
                                                 style={{width: '100%', height: '100%'}} alt="default-pic"/>
                                        </Link>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body pt-0 px-1">
                                            <h5 className="card-title text-truncate text-left"
                                                style={{color: '#1989e3', fontFamily: 'Monospace', fontWeight: '200'}}>
                                              <span style={{cursor: 'pointer'}}
                                                    onClick={() => this.showPet(review.petId)}>
                                                  <Link style={{textDecoration: 'none'}}
                                                        to={`/details/${review.petId}`}>
                                                        {review.petTitle}
                                                  </Link>
                                              </span>
                                                {
                                                    this.props.ownPage &&
                                                    <span className="float-right"
                                                          onClick={() => this.editReview(review)}
                                                          style={{cursor: 'pointer'}}>
                                                    <i className="fa fa-edit"/>
                                                    <i className="fa fa-trash ml-2"
                                                       onClick={() => this.deleteReview(review.id)}/>
                                                  </span>
                                                }
                                            </h5>
                                            {/*<p className="card-text text-left">*/}
                                            {/*    {*/}
                                            {/*        this.state.editingId !== review.id &&*/}
                                            {/*        <small className="text-muted">*/}
                                            {/*            <span>rating: {review.rating}</span>*/}
                                            {/*        </small>*/}
                                            {/*    }*/}
                                            {/*    {*/}
                                            {/*        this.state.editingId === review.id &&*/}
                                            {/*        <select className="custom-select" value={this.state.review.rating}*/}
                                            {/*                onChange={(e) => {*/}
                                            {/*                    const newRating = e.target.value*/}
                                            {/*                    this.setState(prevState => ({*/}
                                            {/*                        review: {*/}
                                            {/*                            ...prevState.review,*/}
                                            {/*                            rating: newRating*/}
                                            {/*                        }*/}
                                            {/*                    }))*/}
                                            {/*                }}>*/}
                                            {/*            <option value="5">5</option>*/}
                                            {/*            <option value="4">4</option>*/}
                                            {/*            <option value="3">3</option>*/}
                                            {/*            <option value="2">2</option>*/}
                                            {/*            <option value="1">1</option>*/}
                                            {/*        </select>*/}
                                            {/*    }*/}
                                            {/*</p>*/}
                                            {
                                                this.state.editingId !== review.id &&
                                                <p className="card-text text-left mb-1"
                                                   style={{height: '3rem', overflow: 'hidden'}}>{review.content}</p>
                                            }
                                            {
                                                this.state.editingId === review.id &&
                                                <textarea value={this.state.review.content}
                                                          style={{width: "100%"}}
                                                          onChange={(e) => {
                                                              const newContent = e.target.value
                                                              this.setState(prevState => ({
                                                                  review: {
                                                                      ...prevState.review,
                                                                      content: newContent
                                                                  }
                                                              }))
                                                          }}/>
                                            }
                                            {
                                                this.state.editingId === review.id &&
                                                <div className="d-flex justify-content-end">
                                                <span className="btn btn-success"
                                                      onClick={() => this.updateReview(this.state.review)}>Save</span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </ul>
            </div>
        )
    }
}

export default ReviewListComponent
