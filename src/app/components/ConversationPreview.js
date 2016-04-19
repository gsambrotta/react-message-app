import React from 'react';
import {Link} from 'react-router';

import Avatar from './conversation-item/Avatar.js';



const ConversationPreview = (props) => {
  console.log(props);
  console.log(props.people);

  const conversationName = props.people.map(person => (
      <li key={person.id}>
        <Link to={`/${person.nickname}`}> {person.nickname} </Link>
      </li>
    ));

  return (
    {conversationName}
  )
};

ConversationPreview.propsType = {
  people: React.PropTypes.object.isRequired,
  messages: React.PropTypes.object.isRequired
};

export default ConversationPreview;