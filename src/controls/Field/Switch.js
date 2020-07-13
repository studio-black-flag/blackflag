import React from 'react'

const FieldSwitch = React.forwardRef(({children, type, ...props}, ref) => {
  return (
    <React.Fragment>
      <input type="checkbox" {...props} ref={ref}/>
      <span></span>
    </React.Fragment>
  );
})

export { FieldSwitch };
