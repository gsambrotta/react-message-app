/*global findConversationPerson*/

import React from 'react';

import MessagesList from './conversation-item/MessagesList.js';
import Avatar from './conversation-item/Avatar.js';
import NewMessageInput from './conversation-item/NewMessageInput.js';


export default class Conversation extends React.Component {
  constructor(props) {
    super();
  }

  findConversationPerson(person){
    return person.nickname === this.props.params.conversation
  }

  render() {
    const people = this.props.people;
    const messages = this.props.messages;
    const currentPerson = people.find(this.findConversationPerson.bind(this));

    return (
      <div className="conversation">
        <header>
          <Avatar image={currentPerson.pic} class/>
          <h1> {this.props.params.conversation} </h1>
        </header>
        <section>
          <MessagesList sender={currentPerson} messages={messages} />
          <NewMessageInput sender={currentPerson.nickname} onMessageSubmit={this.props.handleMessageSubmit} />
        </section>
      </div>
    )
  }

}

Conversation.propTypes = {
  //people: React.PropTypes.array.isRequired,
  //messages: React.PropTypes.array.isRequired
};

