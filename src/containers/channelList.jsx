import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMessages } from '../actions';

class ChannelList extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.channel !== this.props.channel;
  }

  componentDidUpdate() {
    this.props.fetchMessages(this.props.channel);
  }

  render() {
    return (
      <div className="channels-container">
        <span>Redux Chat</span>
        <ul>
          {this.props.channels.map((channel) => {
            return (
              <li
                className={channel === this.props.channel ? "active" : null}
                key={channel}
                role="presentation"
              >
                <Link to={`/${channel}`}>
                  #{channel}
                </Link>
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
  };
}

function MapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

export default connect(MapStateToProps, MapDispatchToProps)(ChannelList);
