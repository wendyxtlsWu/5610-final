import React from 'react';
import nabar from './navbar.css';


class FooterComponent extends React.Component {
    componentDidMount() {
    }

    render() {
        return (

                <div className="container-fluid footer-bottom">
                    <div className="container center">
                        <div className="contact-us">Contact us</div>
                        <a className="contact-us" href="mailto:bai.xue1@northeastern.edu">Xue Bai</a> |
                        <a className="contact-us" href="mailto:liu.suyi@northeastern.edu">Suying Liu</a> |
                        <a className="contact-us" href="mailto:wu.jingj@northeastern.edu">Jingjing Wu</a> |
                        <a className="contact-us" href="mailto:lu.xiaow@northeastern.edu">Xiaowei Lu</a>
                    </div>
                    <div className="container center">
                        <a className="contact-us" href="https://www.google.com/">Privacy</a>
                    </div>
                </div>

        )
    }
}

export default FooterComponent
