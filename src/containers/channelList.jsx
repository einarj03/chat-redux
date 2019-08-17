import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectChannel, fetchMessages } from '../actions';

class ChannelList extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.selectedChannel !== this.props.selectedChannel;
  }

  componentDidUpdate() {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  handleClick = (channel) => {
    if (channel !== this.props.selectedChannel) {
      this.props.selectChannel(channel);
    }
  }

  render() {
    return (
      <div className="channels-container">
        <span>Redux Chat</span>
        <ul>
          {this.props.channels.map((channel) => {
            return (
              <li
                className={channel === this.props.selectedChannel ? "active" : null}
                onClick={() => this.handleClick(channel)}
                key={channel}
                role="presentation"
              >
                #{channel}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function MapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function MapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel, fetchMessages },
    dispatch
  );
}

export default connect(MapStateToProps, MapDispatchToProps)(ChannelList);
