import React from 'react';
import RecentComment from "./recentComment";
import home from "./home.css";

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
                    height: '800px', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                }}>

                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-11">
                        <div className="row" style={{paddingTop: 15}}>
                            <div className="col-md-2 col-lg-2 d-none d-md-block"></div>
                            <div className="col-md-8 col-lg-8 home-title">
                                {<RecentComment
                                        history={this.props.history}
                                        currentUser={this.props.currentUser}/>}
                            </div>
                            <div className="col-md-2 col-lg-2 d-none d-md-block">
                                {/*<UserList*/}
                                {/*    history={this.props.history}*/}
                                {/*    currentUser={this.props.currentUser}/>*/}
                            </div>
                        </div>
                    </div>

                </div>

                {/*<div style={{*/}
                {/*    backgroundImage: `url('https://www.healthy-pets.co.uk/media/8d84f461ccd21f7/hero-image1.png')`,*/}
                {/*    height: '100px', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',*/}
                {/*}}>*/}
                {/*   *!/*/}
                {/*</div>*/}

            </div>
        )
    }
}

export default HomePage
