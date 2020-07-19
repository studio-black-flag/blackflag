import React from 'react';

const Card = ({children, className, hide, header, footer, ...props}) => {
  if (hide) return null

	let c =
		"Card" +
		(className?' '+className:'')

	return (
		<div className={c} {...props}>
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
		</div>
	)
};

export { Card }
