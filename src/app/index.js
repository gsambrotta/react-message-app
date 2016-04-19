import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';

import ConversationsList from './components/ConversationsList.js';
import Conversation from './components/Conversation.js';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <main>
        {this.props.children}
      </main>
    )
  }
}

App.propsType = {};


ReactDOM.render(

  <Router history={browserHistory}>

   <Route path="/" component={App}>
    <IndexRoute messagesUrl={'http://localhost:4000/messages'} peopleUrl={'http://localhost:4000/people'} component={ConversationsList}></IndexRoute>
    <Route path="/:conversation" component={Conversation}></Route>
   </Route>

  </Router>,
  document.getElementById('app')
);
