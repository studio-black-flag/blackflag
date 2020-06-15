import React from 'react'

const Image = ({className, hide, ...props}) => {
  if (hide) return null

  let c = (
    'Image'+
    (className?' '+className:'')
  )
  return (
    <img className={c} {...props}/>
  );

};

export { Image };
