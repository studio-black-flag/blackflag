import React from 'react';
import { Container, Button } from "../"
import { utils } from "../"

const Modal = ({children, className, hide, show, ...props}) => {
  if (hide) return null

	let c =
		"Modal" +
		(className?' '+className:'') +
		(show?' show':'')

	return (
		<div className={c} {...props}>
			<div className="modal-scroll">
				{children}
			</div>
			<div className="modal-bg"></div>
		</div>
	)
};

Modal.content = ({children, className, hide, show, transparent, ...props}) => {
  if (hide) return null

	let c =
		"modal-content" +
		(className?' '+className:'') +
		(transparent?' transparent':'') +
		(show?' show':'')

	return (
		<div className={c} {...props}>
			<div className="modal-inner">
				{children}
			</div>
		</div>
	)
};

Modal.group = ({children, className, hide, show, ...props}) => {
  if (hide) return null
	let c =
		"modal-group" +
		(className?' '+className:'') +
		(show?' show':'')

	return (
		<div className={c} {...props}>
			{children}
		</div>
	)
};

export { Modal };
