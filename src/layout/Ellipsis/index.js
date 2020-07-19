import React, {useRef, useEffect, useState} from 'react'

const Ellipsis = ({children, className, lines, tag, hide, ...props}) => {
  if (hide) return null

  const c = (
    'Ellipsis'+
    (className?' '+className:'')
  )
  const Tag = tag
  return (
    <Tag className={c} style={{WebkitLineClamp:lines}}>
      {children}
    </Tag>
  );
};

Ellipsis. defaultProps = {
  lines:1,
  tag:'p'
}

export { Ellipsis };
