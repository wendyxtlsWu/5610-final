import React from "react";
import {Link} from "react-router-dom";

class SearchResultComponent extends React.Component {
    // state = {
    //     remotePets : this.props.pets.remote,
    //     localPets : this.props.pets.local
    // }
    render() {
        return (

                <div className="row mt-3">
                    {/*// handle local pets render*/}
                    {/*    {*/}
                    { this.props.pets.local && this.props.pets.local.map((pet, idx) => {

                                    return(
                                        <div className="col-lg-3 col-md-5"
                                             key={idx}>
                                            <div className="card m-4 p-3" style={{width:'18rem'}}>
                                                <Link to={`/details/${pet.id}`}>
                                                    <img className="card-img-top" src={pet.photo} alt='Oops! lost'
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
                                                            Age: {pet.age} <br/>
                                                            Needs Foster: {pet.need_shelter ? "Yes" : "No"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                                })
                        }
                    {/*// handle remote pets render*/}
                    {/*{console.log("remotePets", this.props.pets.remote)}*/}
                    {

                        this.props.pets.remote && this.props.pets.remote.map((pet, idx) => {
                            return(
                            pet.photos.length !== 0 &&
                                    <div className="col-lg-3 col-md-5"
                                         key={idx}>
                                        <div className="card m-4 p-3" style={{width:'18rem'}}>
                                            <Link to={`/details/${pet.id}`}>
                                                <img className="card-img-top" src={pet.photos[0].medium} alt='Not available'
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
                                                        City: {pet.contact.address.city} <br/>
                                                        State: {pet.contact.address.state}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })
                    }
                </div>




        )

    }
}

export default SearchResultComponent;
