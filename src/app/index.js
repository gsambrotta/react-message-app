
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';


import App from './App.js';
import ConversationsList from './components/ConversationsList.js';
import Conversation from './components/Conversation.js';
import '../style/main.scss';



ReactDOM.render(

  <Router history={browserHistory}>

   <Route path="/" messagesUrl={'http://localhost:4000/messages'} peopleUrl={'http://localhost:4000/people'} component={App}>
    <IndexRoute component={ConversationsList}></IndexRoute>
    <Route path="/:conversation" component={Conversation}></Route>
   </Route>

  </Router>,
  document.getElementById('app')
);
