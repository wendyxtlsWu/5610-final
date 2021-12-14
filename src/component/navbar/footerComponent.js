import React from 'react';
import nabar from './navbar.css';


class FooterComponent extends React.Component {
    componentDidMount() {
    }

    render() {
        return (

                <div className="container-fluid footer-bootom">
                    <div>Contact us</div>
                    <div>
                        <a href="mailto:bai.xue1@northeastern.edu">Xue Bai</a> |
                        <a href="mailto:liu.suyi@northeastern.edu">Suying Liu</a> |
                        <a href="mailto:wu.jingj@northeastern.edu">Jingjing Wu</a> |
                        <a href="mailto:lu.xiaow@northeastern.edu">Xiaowei Lu</a>

                    </div>
                </div>

        )
    }
}

export default FooterComponent
