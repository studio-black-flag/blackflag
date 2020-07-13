import React, {useRef, useEffect, useState} from 'react'
import {utils} from '../../'

const Ellipsis = ({children, className, lines, scale, tag, hide, ...props}) => {
  if (hide) return null

  const [max, setMax] = useState(100000)
  const ref = useRef()
  useEffect(() => {

    var fontWeight = window.getComputedStyle(ref.current).getPropertyValue('font-weight')/400
    var divHeight = ref.current.offsetHeight
    var lineHeight = parseInt(window.getComputedStyle(ref.current).getPropertyValue('line-height'), 10)
    setMax((children.length*fontWeight)/((divHeight / lineHeight)/lines)*scale)
  }, [])

  const c = (
    'Ellipsis'+
    (className?' '+className:'')
  )
  const Tag = tag
  return (
    <Tag ref={ref} className={c} {...props}>{utils.textEllipsis(children, max)}</Tag>
  );
};

Ellipsis. defaultProps = {
  lines:1,
  tag:'p',
  scale:1
}

export { Ellipsis };
