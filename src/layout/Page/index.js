import React, { Fragment, useEffect, useState, useRef, useImperativeHandle } from 'react'

import { Container } from '../Container'
import { utils } from '../../utils/js'

const Page = React.forwardRef((
  {children, className, hide, name, header, aside, footer, main, loading, ...props},
  ref
) => {

  if (hide) return null

  let c = (
    'Page'+
    (className?' '+className:'') +
    (name?' page-'+name:'') +
    (loading?' loading':'') +
    (header?' with-header':'') +
    (aside?' with-aside':'') +
    (footer?' with-footer':'')
  )

  const alertRef = useRef()
  const [showAlert, setShowAlert] = useState(false)
  const [alertHeight, setAlertHeight] = useState(0)

  useImperativeHandle(ref, () => ({
    alert: (data) => {
      if (data) {
        setShowAlert(data)
        utils.timeout(() => {
          console.log('alertRef', alertRef);
          if (alertRef.current) {
            setAlertHeight(alertRef.current.offsetHeight)
          }
        }, 10)
        if (data.delay != 0) {
          utils.timeout(() => {
            setShowAlert(false)
          }, (data.delay?data.delay:5000))
        }
      } else {
        setShowAlert(false)
      }
    }
  }))

  return (
    <div className={c + (showAlert?' with-alert':'')} {...props}>
      {showAlert &&
        <div className="page-alert-container">
          <div ref={alertRef} className={"page-alert " + showAlert.type}>
            <Container center>
              {showAlert.message}
            </Container>
          </div>
          <div style={{height:`${alertHeight}px`}}></div>
        </div>
      }
      {aside &&
        <aside className="page-aside">{aside}</aside>
      }
      {header &&
        <header className="page-header">{header}</header>
      }
      {main &&
        <main className="page-main">
          {children}
        </main>
      }
      {!main &&
        children
      }
      {footer &&
        <footer className="page-footer">{footer}</footer>
      }
    </div>
  );
})

Page.defaultProps = {
  main: true
}

export { Page };
