import React, { useState } from 'react'
import { Icon, Button } from '../../'

const FieldPassword = React.forwardRef(({type, ...props}, ref) => {
  const [view, setView] = useState(false)
  return (
    <React.Fragment>
      <input type={view?'text':'password'} {...props} ref={ref}/>
      <Button onClick={() => setView(!view)}>
        <Icon hide={!view} name="eye-closed"/>
        <Icon hide={view} name="eye"/>
      </Button>
    </React.Fragment>
  );
})

export { FieldPassword }
