import React from 'react'

const FieldCep = React.forwardRef(({value, ...props}, ref) => {

  const mask = text => {
    return text ? text.toString()
      .replace(/[^0-9\.]+/g, '')
      .replace(/^([\d]{5})-*([\d]{1})/,"$1-$2")
      : ''
  }

  return (
    <input
      value={mask(value)}
      maxLength={9}
      ref={ref}
      {...props}
    />
  );
})

export { FieldCep }
