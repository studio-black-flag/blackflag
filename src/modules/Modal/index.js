import React from 'react';
import { Container, Button, Icon, utils } from "../../"

const Modal = ({children, className, hide, show, ...props}) => {
  if (hide) return null

	let c =
		"Modal" +
		(className?' '+className:'') +
		(show?' show':'')

	return (
		<div className={c} {...props}>
			<div className="modal-scroll">
  			<div className="modal-container">
  				{children}
  			</div>
			</div>
			<div className="modal-bg"></div>
		</div>
	)
};

Modal.content = ({children, className, hide, show, transparent, header, footer, onClose, ...props}) => {
  if (hide) return null

	let c =
		"modal-content" +
		(className?' '+className:'') +
		(transparent?' transparent':'') +
		(show?' show':'')

	return (
		<div className={c} {...props}>
      {header &&
      <div className="modal-header">
        {header}
        <Icon onClick={() => onClose(null)} name="close" />
      </div>
      }
			<div className="modal-body">
				{children}
			</div>
      {footer &&
      <div className="modal-footer">
        {footer}
      </div>
      }
		</div>
	)
};

// Modal.group = ({children, className, hide, show, ...props}) => {
//   if (hide) return null
// 	let c =
// 		"modal-group" +
// 		(className?' '+className:'') +
// 		(show?' show':'')
//
// 	return (
// 		<div className={c} {...props}>
// 			{children}
// 		</div>
// 	)
// };

export { Modal };
