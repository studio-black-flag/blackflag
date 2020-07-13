import React from 'react'

const Container = ({children, className, hide, center, ...props}) => {
  if (hide) return null

  let c = (
    'Container'+
    (className?' '+className:'') + 
    (center?' center':'')
  )

  return (
    <div className={c} {...props}>{children}</div>
  );
};

export { Container };
