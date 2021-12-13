import React from "react";
import {
    findApplications,
    findApplicationsForUser,
    updateApplication,
    deleteApplication
} from "../../service/applicationService";

class ApplicationListAll extends React.Component {

    componentDidMount() {
        // if (this.props.userType == "SHELTER/RESCUE") {
        //     this.findAllApplications();
        // } else if (this.props.userType == "VOLUNTEER") {
        //     this.findApplicationForUser();
        // } else {
        //     alert('Unrecognized user type!');
        // }
        this.findAllApplications();
    }

    state = {
        applications: [],
        editingId: '',
        application: {}
    }

    findAllApplications = () => {
        findApplications()
            .then(applications => {
                console.log('Find all applications:', applications);
                this.setState((prevState) => ({
                    ...prevState,
                    applications: applications,
                }));
            })
    };

    findApplicationForUser = () => {
        findApplicationsForUser(this.props.userId)
            .then(applications => {
                console.log('Find application for user:', applications);
                this.setState((prevState) => ({
                    ...prevState,
                    applications: applications,
                }))
            })
    }

    updateApplication = (application) => {
        updateApplication(application)
            .then(status => {
                this.setState({
                    editingId: ''
                })
                return this.findAllApplications();
            })
    }

    deleteApplication = (applicationId) => {
        deleteApplication(applicationId)
            .then(status => {
                this.setState({
                    editingId: ''
                })
                return this.findAllApplications();
            })
    }

    editApplication = (application) => {
        this.setState({
            editingId: application.id,
            application: application
        })
    }

    render() {
        return (
            <div className="container mb-5">
                <h3 className="text-left ml-1"
                    style={{color: '#37f046', fontFamily: 'Arial', fontWeight: '500'}}>
                    Applications
                </h3>
                <ul className="list-group">
                    {
                        this.state.applications && this.state.applications.length === 0 &&
                        <div className="border rounded d-flex align-items-center justify-content-center"
                             style={{height: '50px'}}>
                            <h5>No Applications</h5>
                        </div>
                    }
                    {
                        this.state.applications && this.state.applications.map((application, idx) =>
                            <li className={'list-group-item'} key={idx}>
                                <div>
                                    Applicant: {application.username}
                                    {
                                        this.props.ownPage &&
                                        <span className="float-right"
                                              style={{cursor: 'pointer'}}>
                                                    <i
                                                        className="fa fa-edit"
                                                        onClick={() => this.editApplication(application)}
                                                    />
                                                    <i
                                                        className="fa fa-trash ml-2"
                                                        onClick={() => this.deleteApplication(application.id)}
                                                    />
                                        </span>
                                    }
                                </div>
                                {
                                    this.state.editingId !== application.id &&
                                    <div>
                                        {`Pet name: ${application.petTitle}`}
                                    </div>
                                }
                                {
                                    this.state.editingId === application.id &&
                                    <div>
                                        <div>
                                            <span style={{marginRight: '8px'}}>{`Pet name: `}</span>
                                            <input className={'rounded'} value={this.state.application.petTitle} onChange={e => {
                                                this.setState(prevState => ({
                                                    ...prevState,
                                                    application: {
                                                        ...prevState.application,
                                                        petTitle: e.target.value,
                                                    }
                                                }))
                                            }}/>
                                        </div>
                                        <div className={'mt-1'}>
                                            <button
                                                // style={{width: '360px', height: '240px'}}
                                                className={'btn-primary rounded'}
                                                onClick={() => this.updateApplication(this.state.application)}>
                                                Update
                                            </button>
                                            <button
                                                // style={{width: '360px', height: '240px'}}
                                                className={'btn-primary ml-1 rounded'}
                                                onClick={() => this.setState(prevState => ({
                                                    ...prevState,
                                                    editingId: '',
                                                }))}>
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                }
                            </li>
                        )
                    }
                </ul>
                {/*<button onClick={() => console.log(this.state.editingId)}>Local state test</button>*/}
            </div>
        );
    }
}

export default ApplicationListAll;