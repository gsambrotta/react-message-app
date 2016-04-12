import React from 'react';

import MessagesList from './components/conversation-item/MessagesList.js';
import Avatar from './components/conversation-item/Avatar.js';


const NewMessageInput = (props) => {
  
  return (
    <div>
      <input type='text' placeholder='write your message' />
    </div>
  )
};

NewMessageInput.propsType = {};

export default NewMessageInput;