import React from 'react'

const Container = ({children, className, hide, ...props}) => {
  if (hide) return null

  let c = (
    'Container'+
    (className?' '+className:'')
  )

  return (
    <div className={c} {...props}>{children}</div>
  );
};

export { Container };
