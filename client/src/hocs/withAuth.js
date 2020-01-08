import React from "react";
import { connect } from "react-redux";

export default function withAuth(SomeComponent){
    class VerifyAuth extends React.Component {        
        componentDidMount(){
            if (!this.props.isAuthenticated)
                this.props.history.push("/signin");
        }

        componentDidUpdate(){
            if (!this.props.isAuthenticated)
                this.props.history.push("/signin");
        }

        render(){
            return <SomeComponent {...this.props} />
        }
    }

    const mapStateToProps = state => ({ isAuthenticated: state.currentUser.isAuthenticated });
    return connect(mapStateToProps)(VerifyAuth);
}
