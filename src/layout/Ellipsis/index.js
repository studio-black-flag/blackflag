import React, {useRef, useEffect, useState} from 'react'
import {utils} from '../../'

const Ellipsis = ({children, className, lines, hide, ...props}) => {
  if (hide) return null

  const [max, setMax] = useState(100000)
  const ref = useRef()
  useEffect(() => {
    console.log('ref: ',ref.current.clientHeight);
    // setMax((ref.current.clientWidth/10)*lines)
    var el = ref.current;
    var divHeight = el.offsetHeight
    var lineHeight = parseInt(el.style.lineHeight);
    var lines = divHeight / lineHeight;
    console.log(ref.current.style);
  }, [])

  const c = (
    'Ellipsis'+
    (className?' '+className:'')
  )

  return (
    <p ref={ref} className={c} {...props}>{utils.textEllipsis(children, max)}</p>
  );
};

Ellipsis. defaultProps = {
  lines:2
}

export { Ellipsis };
