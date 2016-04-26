import React from 'react';

const Avatar = (props) => {
  
  return (
    <div className="avatar">
      <img src={props.image} />
    </div>
  )
};

Avatar.propsType = {};

export default Avatar;