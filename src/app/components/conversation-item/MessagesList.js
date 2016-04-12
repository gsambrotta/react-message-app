import React from 'react';

import Avatar from './Avatar';
{/*import NewMessageInput from './NewMessageInput.js'; */}
import messages from '../../data/messages.js'



const MessagesList = (props) => {


  // Filter message from conversation's sender
  function filterMessageBySender(obj){
    if ('from' in obj && obj.from === props.sender.nickname) {
      return true;
    }
  } 
  const messagesByCurrentSender = messages.filter(filterMessageBySender);
  
  // Print message from conversation's sender
  const messageBlock = messagesByCurrentSender.map(message => (
    <section key={message.id}>

      <Avatar image={props.sender.pic} />
      <p> {message.body} </p>
      <span> {message.date} </span>

    </section>
  )) 
  
  return (
    <div>

      {messageBlock}
      
      {/* <NewMessageInput /> */}
    </div>
  )
};

MessagesList.propsType = {};

export default MessagesList;