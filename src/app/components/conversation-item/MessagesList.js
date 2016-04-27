import React from 'react';
import moment from 'moment';


import Avatar from './Avatar';


export default class MessagesList extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    let messagesByCurrentSender = this.props.sendermsg;

    // Print message from conversation's sender
    let messageBlock = messagesByCurrentSender.map(message => {
      var formattedDate = moment(message.date, 'DD/MM/YYYY hh:mm').fromNow();

      return(
        <li key={message.id} className="list-items  list-items__conversation">

          <Avatar image={this.props.sender.pic} />
          <p> {message.body} </p>
          <span> {formattedDate} </span>

        </li>
      )
    })

    return (
      <ul>

        {messageBlock}
      </ul>
    )
  }
}

MessagesList.propTypes = {
  sender: React.PropTypes.object.isRequired
};
