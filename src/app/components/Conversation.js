import React from 'react';

import MessagesList from './conversation-item/MessagesList.js';
import Avatar from './conversation-item/Avatar.js';


const Conversation = (props) => {

  const people = props.location.state.people;
  const messages = props.location.state.messages;
  const currentPerson = people.find(findConversationPerson);

  function findConversationPerson(person){
    return person.nickname === props.params.conversation
  } 

  return (
    <div>
      <header>
        <Avatar image={currentPerson.pic} />
        <h1> {props.params.conversation} </h1>
      </header>
      <main>
        <MessagesList sender={currentPerson} messages={messages}/>
      </main>
    </div>
  )
};

Conversation.propsType = {
  people: React.PropTypes.array.isRequired
};

export default Conversation;