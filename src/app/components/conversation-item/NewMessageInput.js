/*global document*/

import React from 'react';
import $ from 'jquery';


export default class NewMessageInput extends React.Component {
  constructor(props) {
    super();

    this.state = {
      body: '',
      from: props.sender,
      to: ''
    }
  }

  componentDidMount() {
    $(document.body).on('keydown', this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    $(document.body).off('keydown', this.handleKeyDown.bind(this));
  }

  handleNewMessage(e) {
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let body = this.state.body.trim();
    let from = this.state.from.trim();
    let to = this.state.to.trim();
    if(!body || !from) {
      return;
    }

    this.props.onMessageSubmit({body, from, to});
    this.setState({body: '', from: '', to: '' })
  }

  handleKeyDown(e) {
    let ENTER = 13;
    if ( e.keyCode == ENTER ) {
      this.handleNewMessage();
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>

        <input
          type="text"
          placeholder="write your message"
          value={this.state.body}
          onChange={this.handleNewMessage.bind(this)}
        />

      </form>
    )
  }
}

NewMessageInput.propTypes = {
  sender: React.PropTypes.string.isRequired,
  onMessageSubmit: React.PropTypes.func.isRequired
};
