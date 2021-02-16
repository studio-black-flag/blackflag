import React from 'react'

const Divider = ({children, className, lines, tag, hide, ...props}) => {
  if (hide) return null

  const c = (
    'Divider'+
    (className?' '+className:'')
  )
  return (
    <div className={c}>
      <hr/>{children}<hr/>
    </div>
  );
};


export { Divider };
