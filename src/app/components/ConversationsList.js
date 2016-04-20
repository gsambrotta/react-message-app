import React from 'react';
import $ from 'jquery';

import ConversationPreview from './ConversationPreview.js';
//import Conversation from './Conversation.js';



export default class ConversationsList extends React.Component {
  constructor(props) {
    super();

    this.state = {
      messages: [],
      people: []
    }
  }

  loadMessages() {
    $.getJSON(this.props.route.messagesUrl)

    .done( function(data) {
        this.setState({messages: data});

    }.bind(this)).fail( function(jqxhr, textstatus, err) {
        console.log('Json request faild!' + textstatus + ', ' + err);
    }.bind(this))
  }

  loadPeople() {
    $.getJSON(this.props.route.peopleUrl)

      .done( function(data) {
        this.setState({people: data});

      }.bind(this)).fail( function(jqxhr, textstatus, err) {
        console.log('Json request faild!' + textstatus + ', ' + err);
      }.bind(this))
  }

  componentDidMount() {
    this.loadMessages();
    this.loadPeople();
    console.log(this.state.messages);
    
  }

  render() {

    return(
      <div>
        <h1> Messages </h1>

        <ConversationPreview people={this.state.people} messages={this.state.messages} />
      </div>
    )
  }

}


ConversationPreview.propsType = {
  peopleUrl: React.PropTypes.string.isRequired,
  messagesUrl: React.PropTypes.string.isRequired
}

