import React from 'react';
import $ from 'jquery';


export class NewMessageInput extends React.Component {
  constructor(props) {
    super();

    this.state = {
      body: '',
      from: this.props.sender,
      to: ''
    }
  }

  componentDidMount() {
    $(document.body).on('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    $(document.body).off('keydown', this.handleKeyDown);
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
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>

        <input
          type="text"
          placeholder="write your message"
          value={this.state.body}
          onChange={this.handleNewMessage}
        />

      </form>
    )
  }
}

NewMessageInput.propTypes = {
  sender: React.PropTypes.string.isRequired,
  onMessageSubmit: React.PropTypes.func.isRequired
};
