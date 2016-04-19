import React from 'react';
import $ from 'jquery';

import ConversationPreview from './ConversationPreview.js';
import people from '../data/people.js'


export default class ConversationsList extends React.Component {
  constructor(props) {
    super();

    this.state = {
      messages: [],
      people: []
    }
  }

  loadMessages() {
    $.getJSON(this.props.messagesUrl)
      .done( function(data) {
        this.setState({messages: data});
      })
      .fail( function(jqxhr, textstatus, err) {
        console.log('Json request faild!' + textstatus + ', ' + err);
      })
  }

  loadPeople() {
    $.getJSON(this.props.peopleUrl)
      .done( function(data) {
        this.setState({people: data});
      })
      .fail( function(jqxhr, textstatus, err) {
        console.log('Json request faild!' + textstatus + ', ' + err);
      })
  }

  componentDidMount() {
    this.loadMessages();
    this.loadPeople();
    
  }

  render() {
    console.log(this.loadPeople())
    return(
      <div>
        <h1> Messages </h1>

        <ul>
          <ConversationPreview people={this.loadPeople} messages={this.loadMessages} />
        </ul>

      </div>
    )
  }

}


ConversationPreview.propsType = {
  peopleUrl: React.PropTypes.array.isRequired,
  messagesUrl: React.PropTypes.array.isRequired
}

