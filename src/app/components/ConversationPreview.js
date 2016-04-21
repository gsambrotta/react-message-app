import React from 'react';
import {Link} from 'react-router';

import Avatar from './conversation-item/Avatar.js';
import Conversation from './Conversation.js';


const ConversationPreview = (props) => {
  var people = props.people;
  const messages = props.messages;

  const conversationName = people.map(person => {
    
    // Filter message from conversation's sender
    function filterMessageBySender(obj){
      if ('from' in obj && obj.from === person.nickname) {
        return true;
      }
    }

    const messagesByCurrentSender = messages.filter(filterMessageBySender);
    const lastMsg = messagesByCurrentSender[messagesByCurrentSender.length - 1]

    return (
      <li key={person.id}>
        <Link to={{ pathname: `/${person.nickname}`, state: {people: people, messages: messages} }}>
          <Avatar image={person.pic} />
          {person.nickname}
          <p> {lastMsg.body} </p>
        </Link>
      </li>
    )
  });

  return (
    <ul>
      {conversationName}
      {props.children}
    </ul>

  )
};

ConversationPreview.propsType = {
  people: React.PropTypes.array.isRequired,
  messages: React.PropTypes.array.isRequired
};

export default ConversationPreview;
