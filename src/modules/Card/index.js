import React from 'react';

const Card = ({children, className, hide, header, footer, tag, ...props}) => {
  if (hide) return null

	let c =
		"Card" +
		(className?' '+className:'')

  let Tag = tag

	return (
		<Tag className={c} {...props}>
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
		</Tag>
	)
};

Card.defaultProps = {
  tag:'div'
}

export { Card }
