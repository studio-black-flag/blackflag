import React from 'react'
import { utils } from "../../"

const Progress = ({children, className, hide, progress, ...props}) => {
  if (hide) return null
  let c = (
    'Progress'+
    (className?' '+className:'')
  )
  return (
    <div className={c} {...props}>
      <div style={{width:progress+'%'}} className="progress-bar">{children}</div>
    </div>
  );
};

Progress.defaultProps = {
	progress:0
}

export { Progress };
