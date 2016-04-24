import React from 'react';

import Avatar from './Avatar';


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

  render() {
    let messagesByCurrentSender = this.props.messages.filter(this.filterMessageBySender.bind(this));

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
      </div>
    )
  }
}

MessagesList.propTypes = {
  sender: React.PropTypes.object.isRequired
};
