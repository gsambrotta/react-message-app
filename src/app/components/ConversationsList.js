import React from 'react';
import $ from 'jquery';

import ConversationPreview from './ConversationPreview.js';


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


ConversationsList.propTypes = {
  //peopleUrl: React.PropTypes.string.isRequired,
  //messagesUrl: React.PropTypes.string.isRequired
}

