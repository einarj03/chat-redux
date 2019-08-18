import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: ''
    };
  }

  componentDidMount() {
    this.messageInput.focus();
  }

  componentDidUpdate() {
    this.messageInput.focus();
  }

  handleChange = (event) => {
    this.setState({
      inputVal: event.target.value
    });
  }

  handleSubmit = () => {
    const { createMessage, currentUser, channel } = this.props;
    this.props.createMessage(channel, currentUser, this.state.inputVal);
    this.setState({
      inputVal: ''
    });
  }

  render() {
    return (
      <div className="channel-editor">
        <input
          type="text"
          value={this.state.inputVal}
          onChange={this.handleChange}
          autoComplete="off"
          className="form-control"
          ref={(input) => { this.messageInput = input; }}
        />
        <button type="submit" onClick={this.handleSubmit}>Send</button>
      </div>
    );
  }
}

function MapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

function MapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage },
    dispatch
  );
}

export default connect(MapStateToProps, MapDispatchToProps)(MessageForm);
