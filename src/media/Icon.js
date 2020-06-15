import React from 'react'

const Icon = ({ children, className, hide, name, ...props}) => {
  if (hide) return null
  
  let c = (
    'Icon-'+ name +
    (className?' '+className:'')
  )

  return (
    <i className={c} {...props}></i>
  );
};

export { Icon };
