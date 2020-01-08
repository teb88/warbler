import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../images/warbler-logo.png";
import { logOut } from "../store/actions/auth";

class Navbar extends React.Component {

    logOut = e =>{
        e.preventDefault();
        e.stopPropagation();
        this.props.logOut();
    }

    render(){
        const { currentUser } = this.props;

        return (
          <nav className="navbar navbar-expand">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand">
                  <img src={Logo} alt="Warbler Home" />
                  <span className="logo-text">Warbler</span>
                </Link>
              </div>
              {currentUser && currentUser.isAuthenticated ? (
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to={`/user/${currentUser.user._id}/messages/new`}>
                      New Message
                    </Link>
                  </li>
                  <li>
                    <a href="/#" onClick={this.logOut}>
                      Log out
                    </a>
                  </li>
                </ul>
              ) : (
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/signup">Sign up</Link>
                  </li>
                  <li>
                    <Link to="/signin">Log in</Link>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        );
    }
}

export default connect(state => ({ currentUser: state.currentUser }), { logOut })(Navbar)

