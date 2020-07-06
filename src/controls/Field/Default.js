import React from 'react'

const FieldDefault = React.forwardRef((props, ref) => {
  return (
    <input {...props} ref={ref}/>
  );
})

export { FieldDefault }
