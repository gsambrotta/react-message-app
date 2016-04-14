import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, Router, hashHistory} from 'react-router';

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

  <Router history={hashHistory}>

   <Route path="/" component={App}>
    <IndexRoute component={ConversationsList}></IndexRoute>
    <Route path="/:conversation" component={Conversation}></Route>
   </Route>

  </Router>,
  document.getElementById('app')
);
