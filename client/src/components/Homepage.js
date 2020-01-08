import React from "react";
import MessageTimeline from "./MessageTimeline";
import { Link } from "react-router-dom";

const Homepage = (props) => !props.currentUser.isAuthenticated ?
    <section className="home-hero">
        <h1>What's happening?</h1>
        <h4>New to Warbler?</h4>
        <Link to="/signup" className="btn btn-primary" >Sign up here</Link>
    </section>
    :
    <div><MessageTimeline username={props.currentUser.user.username} profileImageUrl={props.currentUser.user.profileImageUrl} /></div>


export default Homepage;