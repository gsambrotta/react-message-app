import React from 'react';

const Avatar = (props) => {
  
  return (
    <div>
      <img src={props.image} style={{width: 50, height:50, borderRadius: '50%'}} />
    </div>
  )
};

Avatar.propsType = {};

export default Avatar;