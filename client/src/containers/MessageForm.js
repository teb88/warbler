import React from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/messages";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleNewMessge = async (ev) => {
    ev.preventDefault();
    const success = await this.props.postNewMessage(this.state.text);    
    if (success) this.props.history.push("/");
  };

  render() {
    const { errors } = this.props;    
    return (
      <div className="row justify-content-center text-center">
        <div className="col-md-6">
          <h1>Post New Message</h1>
          {(errors && errors.message) && (
            <div className="alert alert-danger">{errors.message}</div>
          )}
          <form onSubmit={this.handleNewMessge}>
            <div className="form-group">
              <textarea
                className="form-control"
                name="text"
                id="text"
                value={this.state.text}
                onChange={this.handleChange}
                cols="30"
                rows="5"
              >
                {this.state.text}
              </textarea>
            </div>
            <button className="btn btn-primary form-control">
              Post Message
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ errors: state.errors });

export default connect(mapStateToProps, { postNewMessage })(MessageForm);
