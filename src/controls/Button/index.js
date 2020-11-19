import React from 'react'
import { Spinner } from "../../modules/Spinner"

const Button = React.forwardRef((
  {children, className, onClick, link, gtag, loading, tag, ...props},
  ref
) => {

  const { to, href, disabled } = props

  const onButtonClick = (e) => {
    if (window.gtag && gtag) {
      window.gtag('event', gtag)
    }
    if (onClick) {
      onClick(e);
    }
  }

  const componentClass = (
    `Button` +
    (className?` ${className}`:``) +
    (disabled?` disabled`:``) +
    (loading?` loading`:``)
  )

  let ButtonTag = 'button'
  if (link && to) ButtonTag = link
  else if (href) ButtonTag = 'a'
  else if (tag) ButtonTag = tag

  return (
    <ButtonTag
      onClick={onButtonClick}
      className={componentClass}
      ref={ref}
      {...props}
    >
      {
        loading ? <React.Fragment><Spinner /> {loading}</React.Fragment> : children
      }
    </ButtonTag>
  );
})

export { Button };
