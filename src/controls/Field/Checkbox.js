import React from 'react'

const FieldCheckbox = React.forwardRef((props, ref) => {
  return (
    <input {...props} ref={ref}/>
  );
})

export { FieldCheckbox };
