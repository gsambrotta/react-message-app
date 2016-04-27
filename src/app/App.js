/*global document*/

import React from 'react';
import $ from 'jquery';
import moment from 'moment';


export default class App extends React.Component {
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

  handleMessageSubmit(message) {
    let messages = this.state.messages;
    const messageUrl = this.props.route.messagesUrl;

    // Define new message
    message.id = Date.now();
    message.to = 'anaketa';
    message.date = moment().format('DD/MM/YYYY hh:mm');

    // save message to show message faster (no wait for serevr fetch)
    let newMessages = messages.concat([message]);
    this.setState({messages: newMessages});

    // save message on server
    $.ajax({
      url: messageUrl,
      dataType: 'json',
      type: 'POST',
      data: message,
      success: function(data) {
        // update messages/conversations view
        this.setState({messages: messages})
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({messages: messages});
        console.error(messageUrl, status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount() {
    this.loadMessages();
    this.loadPeople();

    
    setInterval( () => {
      this.loadMessages();
    }, 2000);
    

  }

  render() {

    return(
      <main>
      {React.cloneElement(this.props.children, 
        {
          people: this.state.people,
          messages: this.state.messages,
          handleMessageSubmit: this.handleMessageSubmit.bind(this)
        }
      )}
      </main>
    )
  }
}

App.propsType = {
  peopleUrl: React.PropTypes.string.isRequired,
  messagesUrl: React.PropTypes.string.isRequired
};
