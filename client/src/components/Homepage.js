import React from "react";
import { Link } from "react-router-dom";

const Homepage = (props) => !props.currentUser.isAuthenticated ?
    <section className="home-hero">
        <h1>What's happening?</h1>
        <h4>New to Warbler?</h4>
        <Link to="/signup" className="btn btn-primary" >Sign up here</Link>
    </section>
    :
    <div><h1>You made it!</h1></div>


export default Homepage;