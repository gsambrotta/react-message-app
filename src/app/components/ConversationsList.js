import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

import people from '../data/people.js'


export default class ConversationsList extends React.Component {
  component(props) {
    super();
  }

  loadMessages() {
    $.getJSON(this.props.messagesUrl, function(data))
      .done( function(data) {
        this.setState({data: data});
      })
      .fail( function(jqxhr, textstatus, err) {
        console.log('Json request faild!' + textstatus + ', ' + err);
      })
  }

  componentDidMount() {
    this.loadMessages();
  }

  render() {

    const conversationName = people.map(person => (
      <li key={person.id}>
        <Link to={`/${person.nickname}`}> {person.nickname} </Link>
      </li>
    ));

    return(
      <div>
        <h1> Messages </h1>

        <ul>
          {conversationName}
        </ul>

      </div>
    )
  }

};
