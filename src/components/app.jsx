import React from 'react';
import MessageList from '../containers/messageList';
import ChannelList from '../containers/channelList';

const App = (props) => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img src="../assets/images/logo.png" alt="logo" className="messaging-logo"/>
      </div>
      <ChannelList channel={props.match.params.channel} />
      <MessageList channel={props.match.params.channel} />
    </div>
  );
};

export default App;
