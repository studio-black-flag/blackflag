import React from 'react'

const FieldSlug = React.forwardRef(({value, ...props}, ref) => {

  const mask = text => {
    return text ? text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      : ''
  }

  return (
    <input
      value={mask(value)}
      ref={ref}
      {...props}
    />
  );
})

export { FieldSlug }
