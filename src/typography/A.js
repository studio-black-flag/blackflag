import React from 'react'

const A = function(props) {
  if (props.hide) return null
  const {children, className, onClick, type, href, to, target, reactRouterLink, disabled} = props
  const c = (
    'A'+
    (className?' '+className:'')+
    (disabled?' disabled':'')
  )

  if (reactRouterLink) {
    const Link = reactRouterLink;
    return (
      <Link to={to} className={c}>{children}</Link>
    )
  } else if (onClick) {
    return (
			<button disabled={disabled} type={type} onClick={onClick} className={c}>{children}</button>
    )
  } else {
    return (
			<a href={href} className={c} target={target}>{children}</a>
    );
  }
}

A.defaultProps = {
  type: 'button',
  target: 'self',
  disabled: false
}

export {A};
