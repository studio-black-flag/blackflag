import React from 'react'

const FieldPhone = React.forwardRef(({value, ...props}, ref) => {

  const mask = text => {
    return text ? text.toString()
      .replace(/\D/g,"")
      .replace(/^(\d{2})(\d)/g,"($1) $2")
      .replace(/(\d)(\d{4})$/,"$1-$2")
      : ''
  }

  return (
    <input
      value={mask(value)}
      maxLength={15}
      ref={ref}
      {...props}
    />
  );
})

export { FieldPhone }
