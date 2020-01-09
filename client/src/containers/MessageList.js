import React from "react";
import MessageItem from "../components/MessageItem";
import { fetchAndLoadMessages, deleteMessage } from "../store/actions/messages";
import { connect } from "react-redux";

class MessageList extends React.Component {

  componentDidMount() {
    this.props.fetchAndLoadMessages();
  }

  render() {
    const { messages, deleteMessage, currentUser } = this.props;
    const { _id } = currentUser.user;

    console.log(JSON.stringify(messages))

    const messageItems = messages.map(m => (
      <MessageItem
        key={m._id}
        text={m.text}
        username={m.user.username}
        date={m.createdAt}
        profileImageUrl={m.user.profileImageUrl}
        isAuthor={m.user._id === _id}
        onDelete={deleteMessage.bind(this, _id, m._id)}
      />)).reverse();

    return messageItems;
  }
}

const mapStateToProps = state => ({ messages: state.messages, currentUser: state.currentUser });

export default connect(mapStateToProps, { fetchAndLoadMessages, deleteMessage })(MessageList);
