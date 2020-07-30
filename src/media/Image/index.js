import React from 'react'

const Image = ({className, hide, src, ...props}) => {
  if (hide) return null

  let c = (
    'Image'+
    (className?' '+className:'')
  )
  return (
    <figure className={c} {...props}>
      <img src={src}/>
    </figure>
  );

};

export { Image };
