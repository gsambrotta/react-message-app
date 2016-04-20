import React from 'react';

import MessagesList from './conversation-item/MessagesList.js';
import Avatar from './conversation-item/Avatar.js';
import peopleOld from '../data/people.js'



const Conversation = (props) => {

  console.log(props);
  //console.log(people);

  function findConversationPerson(person){
    return person.nickname === props.params.conversation
  }
  const currentPerson = peopleOld.find(findConversationPerson); 


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

Conversation.propsType = {
  people: React.PropTypes.array.isRequired
};

export default Conversation;