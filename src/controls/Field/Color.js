import React from 'react'
import { Icon, utils } from '../../'

const FieldColor = React.forwardRef(({ value, options, label, onChange, ...props }, ref) => {
  let localName = utils.randomId()
  return (
    <div className="field-colors">
      {options &&
        options.map((option, i) => {
          let localId = utils.randomId()
          return (
            <input checked={value === option.value} style={{backgroundColor:option.value}} key={i} name={localName} id={localId} type="radio" onChange={onChange} value={option.value} />
          )
        })
      }
    </div>
  )
})

export { FieldColor };
