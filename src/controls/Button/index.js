import React from 'react'
import { Spinner } from "../../"

const Button = React.forwardRef(({children, className, hide, onClick, link, gtag, loading, tag, ...props}, ref) => {
  if (hide) return null

  const { to, href, disabled } = props

  const onButtonClick = (e) => {
    if (window.gtag && gtag) {
      window.gtag('event', gtag)
    }
    if (onClick) {
      onClick(e);
    }
  }

  const c = (
    'Button'+
    (className?' '+className:'')+
    (disabled?' disabled':'') +
    (loading?' loading':'')
  )

  let ButtonTag = 'button'
  if (link && to) ButtonTag = link
  else if (tag) ButtonTag = tag
  else if (href) ButtonTag = 'a'

  return (
    <ButtonTag onClick={onButtonClick} className={c} {...props} ref={ref}>
      {loading ?
        <React.Fragment>
          <Spinner /> {loading}
        </React.Fragment>
        :
        children
      }
    </ButtonTag>
  );
})

export { Button };
