import React from 'react'

const Spinner = ({children, className, hide, ...props}) => {
  if (hide) return null
  let c = (
    'Spinner'+
    (className?' '+className:'')
  )
  return (
    <div className={c} {...props}></div>
  );
};

export { Spinner };
