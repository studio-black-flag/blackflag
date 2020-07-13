import React, { useState } from 'react'
import { Icon, Button } from '../../'

const FieldPassword = React.forwardRef(({type, ...props}, ref) => {
  const [view, setView] = useState(false)
  return (
    <React.Fragment>
      <input type={view?'text':'password'} {...props} ref={ref}/>
      <Button onClick={() => setView(!view)}>
        <Icon hide={!view} name="minus"/>
        <Icon hide={view} name="plus"/>
      </Button>
    </React.Fragment>
  );
})

export { FieldPassword }
