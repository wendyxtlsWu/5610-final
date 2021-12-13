import React from 'react';
import {Link} from "react-router-dom";
import {getRecentReviews} from '../../service/reviewService'

class RecentComment extends React.Component {
    componentDidMount() {
        getRecentReviews().then(reviews => {
            console.log(reviews);
            this.setState({
                reviews: reviews
            })
        })
    }

    state = {
        reviews: []
    };

    showProfile = (userId) => {
        if (userId === this.props.currentUser.id)
            this.props.history.push('/profile')
        else
            this.props.history.push('/profile/' + userId)
    };

    showPet = (petId) => {
        this.props.history.push('/details/' + petId)
    };

    render() {
        return (
            <div className="container mt-2 mb-5">
                <h4 style={{color: 'blue', fontFamily: 'Cantrell', fontWeight: '480'}}>Recent Comments</h4>
                <hr/>
                <div className="row">
                    {
                        this.state.reviews && this.state.reviews.map((review, i) =>
                            <div className="col-md-12 col-lg-6 mt-1 mb-2" key={i}>
                                <div className="card">
                                    <div className="row p-2">
                                        <div className="col-md-4">
                                            review image url
                                            {/*<Link to={`details/${review.petId}`}>*/}
                                            {/*    <img className="rounded" src={review.businessUrl}*/}
                                            {/*         style={{width: '100%', height: '8rem'}} alt="default-pic"/>*/}
                                            {/*</Link>*/}
                                        </div>
                                        <div className="col-md-8 px-0">
                                            <div className="card-body p-0 pl-3">
                                                <Link to={`details/${review.petId}`}>
                                                    <h5 className="card-title text-truncate text-left mb-0 mr-0"
                                                        style={{color: 'blue', fontFamily: 'Oswald', fontWeight: '180'}}>
                                                        <span style={{cursor: 'pointer'}}>
                                                            {review.petTitle}
                                                        </span>
                                                    </h5>
                                                </Link>
                                                <p className="card-text text-left mb-0">
                                                    <small className="text-muted">
                                                        <span>rating: {review.rating}</span>
                                                    </small>
                                                </p>
                                                <p className="card-text text-left mb-1"
                                                   style={{height: '4rem', overflow: 'hidden'}}>{review.content}</p>
                                                <p className="card-text">
                                                    <small className="text-muted">
                                                         <span style={{cursor: 'pointer'}}
                                                               onClick={() => this.showProfile(review.userId)}>By {review.username}</span>
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default RecentComment
