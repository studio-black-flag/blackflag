import React from 'react'

const FieldDate = React.forwardRef(({value, type, ...props}, ref) => {

  const mask = text => {
    return text ? text.toString()
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    : ''
  }

  return (
    <input
      value={mask(value)}
      maxLength={10}
      ref={ref}
      type="text"
      {...props}
    />
  );
})

export { FieldDate }
