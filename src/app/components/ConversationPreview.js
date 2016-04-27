import React from 'react';
import {Link} from 'react-router';

import Avatar from './conversation-item/Avatar.js';


const ConversationPreview = (props) => {

  return (
    <li key={props.id} className="list-items list-items__preview">
        <Link to={{ pathname: `/${props.nickname}`}}>
          <Avatar image={props.pic} />
          <h2>{props.nickname}</h2>
          <span>{props.dateMsg}</span>
          <p> {props.bodyMsg} </p>
        </Link>
        <hr />
      </li>

  )
};

ConversationPreview.propTypes = {
  nickname: React.PropTypes.string.isRequired,
  pic: React.PropTypes.string.isRequired,
  dateMsg: React.PropTypes.string.isRequired,
  bodyMsg: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired
};

export default ConversationPreview;
