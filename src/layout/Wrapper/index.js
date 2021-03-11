import React from 'react'

const Wrapper = ({children, className, hide, ...props}) => {
  if (hide) return null

  let c = (
    'Wrapper'+
    (className?' '+className:'')
  )

  return (
    <div className={c} {...props}>{children}</div>
  );
};

export { Wrapper };
