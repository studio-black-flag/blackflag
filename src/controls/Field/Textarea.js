import React from 'react'

const FieldTextarea = React.forwardRef((props, ref) => {
  return (
    <textarea {...props} ref={ref}>{props.value}</textarea>
  )
})

export { FieldTextarea };
