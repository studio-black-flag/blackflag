import React from 'react'
import { Icon } from '../../'

const FieldSelect = React.forwardRef(({ options, label, ...props }, ref) => {
  return (
    <React.Fragment>
      <select {...props} ref={ref}>
        {options &&
          options.map((option, i) => {
            return (
              <option key={i} value={option.value}>
                {option.label}
              </option>
            )
          })
        }
      </select>
      <span className="field-after">
        <Icon name="arrow-bottom" />
      </span>
    </React.Fragment>
  )
})

export { FieldSelect };
