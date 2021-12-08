import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavbarComponent from "../navbar/navbarComponent";
import PetDetailComponent from "../petDetail/petDetailComponent";

class PetFinder extends React.Component {

    render() {
        return (
            <Router>
                <div className="container-fluid" style={{width: '100%', height: '100%'}}>
                    <Route path="/">
                         <NavbarComponent/>
                    </Route>

                    <Route path="/details" exact={true}>
                        <PetDetailComponent/>
                    </Route>

                </div>
            </Router>

        )
    }

}

export default PetFinder
