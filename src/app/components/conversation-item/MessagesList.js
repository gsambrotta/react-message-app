import React from 'react';

import Avatar from './Avatar';
import NewMessageInput from './NewMessageInput.js';
import messages from '../../data/messages.js'



export class MessagesList extends React.Component {
  constructor(props) {
    super();
  }

  // Filter message from conversation's sender
  filterMessageBySender(obj){
    if ('from' in obj && obj.from === this.props.sender.nickname) {
      return true;
    }
  }

  handleMessageSubmit() {
    console.log('submit');
    var lintErr = this.props;
  }

  render() {
    let messagesByCurrentSender = messages.filter(this.filterMessageBySender.bind(this));

    // Print message from conversation's sender
    let messageBlock = messagesByCurrentSender.map(message => (
      <section key={message.id}>

        <Avatar image={this.props.sender.pic} />
        <p> {message.body} </p>
        <span> {message.date} </span>

      </section>
    ))

    return (
      <div>

        {messageBlock}

        <NewMessageInput onMessageSubmit={this.handleMessageSubmit.bind(this)} />
      </div>
    )
  }
}

MessagesList.propsType = {
  sender: React.PropTypes.object.isRequired
};

export default MessagesList;
