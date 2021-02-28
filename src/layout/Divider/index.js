import React, {Fragment} from 'react'

const Divider = ({children, className, lines, tag, hide, ...props}) => {
  if (hide) return null

  const c = (
    'Divider'+
    (className?' '+className:'')
  )
  return (
    <div className={c}>
      {children && <Fragment><hr/>{children}<hr/></Fragment> }
      {!children && <hr/> }
    </div>
  );
};


export { Divider };
