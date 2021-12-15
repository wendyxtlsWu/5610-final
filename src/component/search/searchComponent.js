import React from "react";
import SearchResultComponent from "./searchResultComponent";
import {searchPets} from "../../service/petService";

export default class SearchComponent extends React.Component {
    // constructor(props) {
    //     // console.log("SearchCom props ", props)
    //     super(props);
    // }

    componentDidMount() {
        // console.log("state ", this.state)
        searchPets(this.state.search)
            .then(response => {
                // console.log("SC didmount", response)
                this.renderPetsResult(response)
            })
        // this.searchBusiness()
    }

    state = {
        search : {
            type: this.props.type,
            name: this.props.name,
            size: this.props.size,
            age: this.props.age,
            gender:this.props.gender
        },
        searchPetsResult: {}
    }


    handleSearch = () => {
        const search = this.state.search;
        // console.log("request", search)
        searchPets(search)
                .then(response => {
                    // console.log("handleSearch", response)
                    this.renderPetsResult(response);
                })
        }



    renderPetsResult = (response) => {
        if (response.local.length === 0 && response.remote.length === 0) {
            alert('No result has been found.');
            this.setState({
                search : {
                    type: '',
                    name: '',
                    size:'',
                    age:'',
                    gender:''
                },
                searchPetsResult: {}
            });
            this.props.history.push('/search');
        } else {
            // console.log("renderPetsResult", response)
            // console.log("state in ", this.state)
            this.props.history.push(`/search?type=${this.state.search.type}&name=${this.state.search.name}&size=${this.state.search.size}&age=${this.state.search.age}&gender=${this.state.search.gender}`);
            this.setState((prevState) => ({
                ...prevState,
                searchPetsResult: response
            }))


        }
    }

    getStringFromState(s) {
        return s === undefined
    }

    render() {
        return (
            <div className="row mt-3">
                <div className="row">
                    <div className="col-lg-3 col-md-2">
                        <div className="px-3 my-1">
                            <div className="d-block">
                                <span className="row justify-content-center">Name</span>
                                <input value={this.state.search.name} placeholder="Name" type="text" className="form-control border"
                                       onChange={(e) => {
                                           this.setState(prevState => ({
                                               search: {
                                                   ...prevState.user,
                                                   name: e.target.value
                                               }
                                           }))
                                       }
                                       }/>
                            </div>
                            <div className="d-block">
                                <span className="row justify-content-center">Type</span>
                                <select
                                    id="petSearchType"
                                    className="custom-select border"
                                    onChange={(e) => {
                                        this.setState(prevState => ({
                                            search: {
                                                ...prevState.search,
                                                type: e.target.value
                                            }
                                        }))
                                    }}>
                                    <option defaultValue={""}>Choose...</option>
                                    <option value={"Dog"}>Dog</option>
                                    <option value={"Cat"}>Cat</option>
                                </select>
                            </div>
                            <div className="d-block">
                                <span className="row justify-content-center">Gender</span>
                                <select
                                    className="custom-select border"
                                    onChange={(e) => {
                                        this.setState(prevState => ({
                                            search: {
                                                ...prevState.search,
                                                gender: e.target.value
                                            }
                                        }))
                                    }}>
                                    <option defaultValue={""}>Choose...</option>
                                    <option value={"Female"}>Female</option>
                                    <option value={"Male"}>Male</option>
                                </select>
                            </div>
                            <div className="d-block">
                                <span className="row justify-content-center">Size</span>
                                <select
                                    className="custom-select border"
                                    onChange={(e) => {
                                        this.setState(prevState => ({
                                            search: {
                                                ...prevState.search,
                                                size: e.target.value
                                            }
                                        }))
                                    }}>
                                    <option defaultValue={""}>Choose...</option>
                                    <option value={"Small"}>Small</option>
                                    <option value={"Medium"}>Medium</option>
                                    <option value={"Large"}>Large</option>
                                </select>
                            </div>
                            <div className="d-block">
                                <span className="row justify-content-center">Age</span>
                                <select
                                    className="custom-select border"
                                    onChange={(e) => {
                                        this.setState(prevState => ({
                                            search: {
                                                ...prevState.search,
                                                age: e.target.value
                                            }
                                        }))
                                    }}>
                                    <option defaultValue={""}>Choose...</option>
                                    <option value={"Baby"}>Baby</option>
                                    <option value={"Young"}>Young</option>
                                    <option value={"Adult"}>Adult</option>
                                    <option value={"Senior"}>Senior</option>
                                </select>
                            </div>
                            <button className=" mt-4 btn btn-block btn-success " id="searchBtn"
                                    onClick={this.handleSearch}>Search
                            </button>

                        </div>
                    </div>
                    <div className="col-9">
                        {/*{console.log("before calling searchResult", this.state.searchPetsResult)}*/}
                        <SearchResultComponent pets={this.state.searchPetsResult}/>

                    </div>
                </div>
            </div>
        )
    }
}