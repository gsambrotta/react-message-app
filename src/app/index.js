/*global document*/

import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';
import $ from 'jquery';
import moment from 'moment';


import ConversationsList from './components/ConversationsList.js';
import Conversation from './components/Conversation.js';
import '../style/main.scss';

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
    message.id = Date.now();
    message.to = 'anaketa';
    message.date = moment().format('DD/MM/YYYY hh:mm');
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
        console.error(messageUrl, status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount() {
    this.loadMessages();
    this.loadPeople();
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


ReactDOM.render(

  <Router history={browserHistory}>

   <Route path="/" messagesUrl={'http://localhost:4000/messages'} peopleUrl={'http://localhost:4000/people'} component={App}>
    <IndexRoute component={ConversationsList}></IndexRoute>
    <Route path="/:conversation" component={Conversation}></Route>
   </Route>

  </Router>,
  document.getElementById('app')
);
