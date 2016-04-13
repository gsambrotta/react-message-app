import React from 'react';

import MessagesList from './MessagesList.js';


export class NewMessageInput extends React.Component {
  constructor(props) {
  	super();

  	this.state = {
  		message: ''
  	}
  }

  handleNewMessage(e) {
  	this.setState({message: e.target.value})
  }
  
  render() {
	  return (
	    <form onSubmit={this.handleSubmit}>

	      <input 
	      	type='text' 
	      	placeholder='write your message'
	      	value={this.state.message}
	      	onChange={this.handleNewMessage} 
	      />

	    </form>
	  )
  }
}

NewMessageInput.propsType = {};

export default NewMessageInput;