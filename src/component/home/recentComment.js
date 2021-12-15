import React from 'react';
import {Link} from "react-router-dom";
import {getRecentReviews} from '../../service/reviewService';
import home from "./home.css";

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
                <h4 className="home-title">Recent Comments</h4>
                <hr/>
                <div className="row">
                    {
                        this.state.reviews && this.state.reviews.map((review, i) =>
                            <div className="col-md-12 col-lg-6 mt-1 mb-2" key={i}>
                                <div className="card">
                                    <div className="row p-2" style={{color: '#61dafb', fontFamily: 'Gill Sans'}}>
                                        <div className="col-md-4">
                                            <Link to={`details/${review.petId}`}>
                                                <img className="rounded" src={review.petImageURL}
                                                     style={{width: '100%', height: '8rem'}} alt="default-pic"/>
                                            </Link>
                                        </div>
                                        <div className="col-md-8 px-0">
                                            <div className="card-body p-0 pl-3">
                                                <Link to={`details/${review.petId}`}>
                                                    <h5 className="card-title text-truncate text-left mb-0 mr-0 home-title2"
                                                       >
                                                        <span style={{cursor: 'pointer'}}>
                                                            {review.petTitle}
                                                        </span>
                                                    </h5>
                                                </Link>

                                                <p className="card-text text-left mb-1"
                                                   style={{color: 'white',height: '4rem', overflow: 'hidden'}}>{review.content}</p>
                                                <p className="card-text">
                                                    <small className="text-muted">
                                                         <span style={{color: 'white',cursor: 'pointer'}}
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
