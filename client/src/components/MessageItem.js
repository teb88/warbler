import React from "react";
import Moment from "react-moment";
import DefaultProfilePic from "../images/default-profile-image.jpg";
import { Link } from "react-router-dom";

const MessageItem = ({
  text,
  username,
  date,
  profileImageUrl,
  onDelete,
  isAuthor
}) => {
  return (
    <div className="row">
      <div className="col">
        <li className="list-group-item">
          <img
            src={profileImageUrl || DefaultProfilePic}
            alt={username}
            className="timeline-image"
          />
          <div className="message-area">
            <Link to="/">@{username} &nbsp;</Link>
            <small className="text-muted">
              <Moment className="text-muted" format="Do MMM YYYY">
                {date}
              </Moment>
            </small>
            <p>{text}</p>
            {isAuthor && (
              <button type="button" 
                onClick={onDelete}
                className="btn btn-sm btn-danger">
                Delete
              </button>
            )}
          </div>
        </li>
      </div>
    </div>
  );
};

export default MessageItem;
