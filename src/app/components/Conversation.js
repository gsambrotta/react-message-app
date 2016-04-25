import React from 'react';
import $ from 'jquery';

import MessagesList from './conversation-item/MessagesList.js';
import Avatar from './conversation-item/Avatar.js';
import NewMessageInput from './conversation-item/NewMessageInput.js';


const Conversation = (props) => {

  const people = props.location.state.people;
  const messages = props.location.state.messages;
  const currentPerson = people.find(findConversationPerson);

  function findConversationPerson(person){
    return person.nickname === props.params.conversation
  }

  function handleMessageSubmit(message) {
    const messageUrl = 'http://localhost:4000/messages';
    message.id = Date.now();
    message.to = 'anaketa';
    $.ajax({
      url: messageUrl,
      dataType: 'json',
      type: 'POST',
      data: message,
      success: function(data) {
        // update messages/conversations view
      },
      error: function(xhr, status, err) {
        console.error(messageUrl, status, err.toString());
      }
    });
  }


  return (
    <div>
      <header>
        <Avatar image={currentPerson.pic} />
        <h1> {props.params.conversation} </h1>
      </header>
      <main>
        <MessagesList sender={currentPerson} messages={messages} />
        <NewMessageInput sender={currentPerson.nickname} onMessageSubmit={handleMessageSubmit} />
      </main>
    </div>
  )
};

Conversation.propTypes = {
  //people: React.PropTypes.array.isRequired
};


export default Conversation;
