import React from 'react';
import moment from 'moment';

import ConversationPreview from './ConversationPreview.js';


export default class ConversationsList extends React.Component {
  constructor(props) {
    super();
  }

  // Filter message from conversation's sender
  filter(nickname) {
    return (
      function filterMessageBySender(obj) {
        if ('from' in obj && obj.from === nickname) {
          return true;
        }
      }
    )
  }

  render() {
   const conversationName = this.props.people.map(person => {
      // find messages by 'person' 
      const nickname = person.nickname;
      const messagesByCurrentSender = this.props.messages.filter( this.filter(nickname) );
      // find last written message and 'time ago' was written
      const lastMsg = messagesByCurrentSender[messagesByCurrentSender.length - 1]
      var formattedDate = moment(lastMsg.date, 'DD/MM/YYYY hh:mm').fromNow();

      return (
        <ConversationPreview key={person.id} id={person.id} nickname={person.nickname} pic={person.pic} dateMsg={formattedDate} bodyMsg={lastMsg.body} />
      )
    });

    return (
      <div>
        <header>
          <h1> Conversations </h1>
        </header>
        <ul>
          {conversationName}
        </ul>
      </div>
    )
  }

}


ConversationsList.propTypes = {
  people: React.PropTypes.array.isRequired,
  messages: React.PropTypes.array.isRequired
}

