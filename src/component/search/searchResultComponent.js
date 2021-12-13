import React from "react";
import {Link} from "react-router-dom";

class SearchResultComponent extends React.Component {
    render() {
        return (
            <div className="row mt-3">
                {
                    this.props.pets && this.props.pets.map((pet, idx) =>{
                    if (pet.photos.length !== 0) {
                        return(
                        <div className="col-lg-3 col-md-5"
                             key={idx}>
                            <div className="card m-4 p-3" style={{width:'18rem'}}>
                                <Link to={`/details/${pet.id}`}>
                                    <img className="card-img-top" src={pet.photos[0].small} alt='Picture not available'
                                         style={{height: '200px'}}/>
                                </Link>
                                <div className="card-body p-1">
                                    <div className="row">
                                        <h5 className="card-title text-truncate">
                                            <Link to={`/details/${pet.id}`}
                                                  className="col-sm-6 col-md-4 col-lg-4 p-0 ">
                                                {pet.name}
                                            </Link>
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <p className="px-3 text-truncate" style={{color: 'white'}}>
                                            Breed: {pet.breeds.primary} <br/>
                                            City: {pet.contact.address.city}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }})
                }
            </div>
        )

    }
}

export default SearchResultComponent;