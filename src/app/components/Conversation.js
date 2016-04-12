import React from 'react';

import MessagesList from './conversation-item/MessagesList.js';
import Avatar from './conversation-item/Avatar.js';
import people from '../data/people.js'



const Conversation = (props) => {

  function findConversationPerson(person){
    return person.nickname === props.params.conversation
  }
  const currentPerson = people.find(findConversationPerson); 


  return (
    <div>
      <header>
        <Avatar image={currentPerson.pic} />
        <h1> {props.params.conversation} </h1>
      </header>
      <main>
        <MessagesList sender={currentPerson}/>
      </main>
    </div>
  )
};

Conversation.propsType = {};

export default Conversation;