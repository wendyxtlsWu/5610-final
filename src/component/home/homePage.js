import React from 'react';
import RecentComment from "./recentComment";
import UserList from "./userList";
import {Link} from "react-router-dom";

class HomePage extends React.Component {
    componentDidMount() {
    }

    state = {
        keyword: '',
        location: ''
    }

    render () {
        return (
            <div>
                <div style={{
                    backgroundImage: `url('https://www.flytap.com/-/media/Flytap/new-tap-pages/travelling-with-animals/pets/flying-with-pets-og-image-1200x630.jpg')`,
                    height: '600px', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                }}>
                    <div className="d-flex align-items-center justify-content-center" style={{height: '450px'}}>
                        <div className="col-lg-12">
                            <h1 className="text-center"
                                style={{color: 'green', fontFamily: 'Ubuntu', fontWeight: '700', marginTop: -100}}>My Comment</h1>
                            <hr/>
                            search
                            {/*<a href="/search" className="btn btn-success pl-2" style={{color: 'grey'}}>*/}
                            {/*    Find Pet<i className="fa fa-search ml-2"/></a>*/}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-11">
                        <div className="row" style={{paddingTop: 15}}>
                            <div className="col-md-8 col-lg-8">
                                {
                                    <RecentComment
                                        history={this.props.history}
                                        currentUser={this.props.currentUser}/>
                                }
                            </div>
                            <div className="col-md-1 col-lg-1 d-none d-md-block"></div>

                            <div className="col-md-3 col-lg-3 d-none d-md-block">
                                {/*<UserList*/}
                                {/*    history={this.props.history}*/}
                                {/*    currentUser={this.props.currentUser}/>*/}
                            </div>

                        </div>
                    </div>
                    <div className="col-md-1 d-none d-md-block"></div>
                </div>


                <div style={{
                    backgroundImage: `url('https://www.healthy-pets.co.uk/media/8d84f461ccd21f7/hero-image1.png')`,
                    height: '180px', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
                }}>
                    <div className="mx-auto" style={{paddingTop: 40, fontFamily: 'Oxygen', fontWeight: '450'}}>
                        <div>Contact us</div>
                        <div>
                            <a href="mailto:bai.xue1@northeastern.edu">Xue Bai</a>
                        </div>

                        <div>
                            <a href="mailto:liu.suyi@northeastern.edu">Suying Liu</a>
                        </div>
                        <div>
                            {/*<span className="pl-2"></span>*/}
                            <a href="mailto:wu.jingj@northeastern.edu">Jingjing Wu</a>
                        </div>
                        <div>
                            <a href="mailto:lu.xiaow@northeastern.edu">Xiaowei Lu</a>
                        </div>
                        Copyright @ My Petfinder Team 2021
                    </div>
                </div>

            </div>
        )
    }
}

export default HomePage
