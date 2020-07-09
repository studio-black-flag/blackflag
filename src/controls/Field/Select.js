import React from 'react'

const FieldSelect = React.forwardRef(({ options, label, ...props }, ref) => {
  return (
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
  )
})

export { FieldSelect };
