import React, { useRef, useEffect, useState, useLayoutEffect  } from 'react';
import { Container, Button, Icon, utils } from "../../"

const Modal = ({children, className, hide, show, ...props}) => {
  if (hide) return null

	let c =
		"Modal" +
		(className?' '+className:'') +
		(show?' show':'')

	return (
		<div className={c} {...props}>
      {children}
			<div className="modal-bg"></div>
		</div>
	)
};

Modal.content = ({children, className, hide, show, transparent, header, footer, onClose, ...props}) => {
  if (hide || !show) return null

  const contentRef = useRef()
  const headerRef = useRef()
  // const body = useRef()
  const footerRef = useRef()

  const [bodyHeight, setBodyHeight] = useState(0)

	let c =
		"modal-content" +
		(className?' '+className:'') +
		(transparent?' transparent':'') +
		(show?' show':'')

  utils.onWindowResize(function() {
    if(headerRef.current && footerRef.current) {
      let h = headerRef.current.offsetHeight
      h += parseInt(window.getComputedStyle(contentRef.current).getPropertyValue('margin-top'), 10)
      h += parseInt(window.getComputedStyle(contentRef.current).getPropertyValue('margin-bottom'), 10)
      if(footerRef) {
        h += footerRef.current.offsetHeight
      }
      setBodyHeight((window.innerHeight - h)+'px')
    }
  }, [show])

	return (
		<div className={c} {...props} ref={contentRef}>
      <div className="modal-header" ref={headerRef}>
        {header}
        <Button className="modal-close" onClick={() => onClose(null)}>
          <Icon name="close" />
        </Button>
      </div>
			<div className="modal-body" style={{maxHeight:bodyHeight}}>
				{children}
			</div>
      {footer &&
      <div className="modal-footer" ref={footerRef}>
        {footer}
      </div>
      }
		</div>
	)
};

Modal.content.defaultProps = {
  header: ''
}

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
