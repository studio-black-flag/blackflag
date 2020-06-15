import React from 'react'

const Button = ({children, className, hide, onClick, link, gtag, tag, ...props}) => {
  if (hide) return null

  const { to, href, disabled, required } = props

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
    (disabled?' disabled':'')
  )

  let ButtonTag = 'button'
  if (link && to) ButtonTag = link
  else if (tag) ButtonTag = tag
  else if (href) ButtonTag = 'a'

  return (
    <ButtonTag onClick={onButtonClick} className={c} {...props}>{children}</ButtonTag>
  );
}

export { Button };
