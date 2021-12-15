import React from "react";
import privacy from "./privacy.css";

class PrivacyComponent extends React.Component {
    componentDidMount() {
        // this.props.history.push('/')
    }

    render() {
        return(
            <>
                <h4 className="privacy-title">Privacy Policy</h4>
                <p>
                    This privacy policy shows processes and rules that our Clicked team refers to when we collect, analyze and present your data. It also demonstrates laws and right that is relevant to you.
                    Interpretation and Definitions
                </p>
                <p>
                    Definitions in this privacy policy:
                    • Account means a specified account you may sign up and log in.
                    • Personal Data is the data that is relevant to user accessing this website
                    • Service is the service provided by our website.
                    • Website means Clicked website
                    • You refer to the user accessing Clicked website.
                </p>
                <p>
                    Collecting and Using Your Personal Data
                    Kinds of data:
                    • Personal data (name, email, zip code)
                    • Usage data (ip, Brower version, Brower type)
                    • Cookies (Browser Cookies, Flash Cookies, Web Beacons)
                </p>
                <p>
                    Using Your Personal Data:
                    • Maintain and provide the service
                    • Manage user existing account
                    • Keep contact with user
                    • Make application
                    • Make comment
                    Retention of Your Personal Data
                    • Clicked team use your personal data under our legal obligations
                    • Clicked team use your personal data for further analysis inside our team and improve the service provided for current and future beneficial users.
                </p>
                <p>
                    Transfer of Your Personal Data
                    Your data is belonging to Clicked team and can be transferred to other organization, state or country.
                    Your consent and submission mean that you have already agreed with this transfer.
                    Clicked team will always take any actions to make sure your data is kept securely.
                    Disclosure of Your Personal Data
                    If Clicked team happen to make some changes, your data may be in a transferring.
                    According to local laws, Clicked team may be required to present your data referring to legal request or laws.
                    Changes to this Privacy Policy
                    You will be notified when there is any update about privacy policy via email or notice on Clicked website.
                </p>
                <p>
                    Contact Us
                    If any questions exist, please contact us:
                    By email: fuliareg@gmail.com
                </p>


            </>

        )
    }
}

export default PrivacyComponent
