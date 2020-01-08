import React from "react";
import DefaultProfilePic from "../images/default-profile-image.jpg";

const UserAside = ({ profileImageUrl, username }) => (
  <aside id="sidebar-pic" className="col-sm-2">
    <div className="panel panel-default">
      <div className="panel-body">
        <img
          src={profileImageUrl || DefaultProfilePic}
          alt={`${username}'s profile pic`}
          className="img-thumbnail"
        />
      </div>
    </div>
  </aside>
);

export default UserAside;
