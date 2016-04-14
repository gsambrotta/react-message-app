import React from 'react';
import {Link} from 'react-router';

import people from '../data/people.js'


const ConversationsList = () => {

  const conversationName = people.map(person => (
    <li key={person.id}>
      <Link to={`/${person.nickname}`}> {person.nickname} </Link>
    </li>
  ))
  return(
    <div>
      <h1> Messages </h1>

      <ul>
        {conversationName}
      </ul>

    </div>
  )

};

ConversationsList.propsType = {};

export default ConversationsList;
