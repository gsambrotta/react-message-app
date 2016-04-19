import React from 'react';
import {Link} from 'react-router';

import Avatar from './conversation-item/Avatar.js';



const ConversationPreview = (props) => {

  const conversationName = props.people.map(person => (
    <li key={person.id}>
      <Link to={`/${person.nickname}`}>
        <Avatar image={person.pic} />
        {person.nickname}
      </Link>
    </li>
  ));


  return (
    <ul>
      {conversationName}
    </ul>
  )
};

ConversationPreview.propsType = {
  people: React.PropTypes.array.isRequired,
  messages: React.PropTypes.array.isRequired
};

export default ConversationPreview;
