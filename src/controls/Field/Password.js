import React, { useState } from 'react'

import { Button } from '../../controls/Button'
import { Icon } from '../../media/Icon'

const FieldPassword = React.forwardRef(({type, ...props}, ref) => {
  const [view, setView] = useState(false)
  return (
    <React.Fragment>
      <input type={view?'text':'password'} {...props} ref={ref}/>
      <span className="field-after" onClick={() => setView(!view)}>
        <Icon hide={!view} name="eye-closed"/>
        <Icon hide={view} name="eye"/>
      </span>
    </React.Fragment>
  );
})

export { FieldPassword }
