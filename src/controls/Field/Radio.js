import React from 'react'

const FieldRadio = React.forwardRef((props, ref) => {
  return (
    <input {...props} ref={ref}/>
  )
})

export { FieldRadio };
