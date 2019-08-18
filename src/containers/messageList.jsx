import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Message from '../components/message';
import MessageForm from './messageForm';
import { fetchMessages } from '../actions';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 1000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.channel);
  }

  render() {
    const { channel, messages } = this.props;
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span>{`Channel #${channel}`}</span>
        </div>
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {messages.map((message) => {
            return <Message key={message.id} message={message} />;
          })}
        </div>
        <MessageForm channel={channel} />
      </div>
    );
  }
}

function MapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function MapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

export default connect(MapStateToProps, MapDispatchToProps)(MessageList);
