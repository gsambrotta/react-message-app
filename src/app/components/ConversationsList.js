import React from 'react';

import ConversationPreview from './ConversationPreview.js';


export default class ConversationsList extends React.Component {
  constructor(props) {
    super();
  }

  render() {

    return(
      <div>
        <header>
          <h1> Messages </h1>
        </header>
        <ConversationPreview people={this.props.people} messages={this.props.messages} />
      </div>
    )
  }

}


ConversationsList.propTypes = {
  //people: React.PropTypes.array.isRequired,
  //messages: React.PropTypes.array.isRequired
}

