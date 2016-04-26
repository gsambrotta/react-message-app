import React from 'react';
import {Link} from 'react-router';
import moment from 'moment';

import Avatar from './conversation-item/Avatar.js';


const ConversationPreview = (props) => {
  const people = props.people;
  const messages = props.messages;

  const conversationName = people.map(person => {
    const messagesByCurrentSender = messages.filter(filterMessageBySender);
    const lastMsg = messagesByCurrentSender[messagesByCurrentSender.length - 1]
    var formattedDate = moment(lastMsg.date, 'DD/MM/YYYY hh:mm').fromNow();

    // Filter message from conversation's sender
    function filterMessageBySender(obj){
      if ('from' in obj && obj.from === person.nickname) {
        return true;
      }
    }

    return (
      <li key={person.id} className="list-items list-items__preview">
        <Link to={{ pathname: `/${person.nickname}`}}>
          <Avatar image={person.pic} />
          <h2>{person.nickname}</h2>
          <span>{formattedDate}</span>
          <p> {lastMsg.body} </p>
        </Link>
        <hr />
      </li>
    )
  });

  return (
    <ul>
      {conversationName}
    </ul>

  )
};

ConversationPreview.propTypes = {
  people: React.PropTypes.array.isRequired,
  messages: React.PropTypes.array.isRequired
};

export default ConversationPreview;
