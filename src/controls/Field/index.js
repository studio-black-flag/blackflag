import React, {useState} from 'react';
import { utils } from '../../'

import {FieldDefault} from './Default'
import {FieldRadio} from './Radio'
import {FieldTextarea} from './Textarea'
import {FieldCheckbox} from './Checkbox'
import {FieldFile} from './File'
import {FieldSwitch} from './Switch'
import {FieldSelect} from './Select'
import {FieldPassword} from './Password'

const Field = React.forwardRef(({children, className, hide, onChange, error, id, ...props}, ref) => {
  if (hide) return null
  const { type, disabled, required, maxLength } = props

  let localId
  if (id) {
    localId = id
  } else {
    localId = utils.randomId()
  }

  const [localValue, setLocalValue] = useState()
  function onFieldChange(e) {
    if (e.target) {
      setLocalValue(e.target.value)
    }
    if (onChange) {
      onChange(e)
    }
  }

  const c = (
    (type?' Field-'+type:'Field')+
    (className?' '+className:'')+
    (error?' error':'')+
    (required?' required':'')+
    (disabled?' disabled':'')
  )

  let FieldTag = FieldDefault
  switch (type) {
    case 'textarea':          FieldTag = FieldTextarea; break;
    case 'radio':             FieldTag = FieldRadio; break;
    case 'checkbox':          FieldTag = FieldCheckbox; break;
    case 'file':              FieldTag = FieldFile; break;
    case 'switch':            FieldTag = FieldSwitch; break;
    case 'select':            FieldTag = FieldSelect; break;
    case 'password':          FieldTag = FieldPassword; break;
  }

  return (
    <div className={c}>
      {(children && type != "file") &&
        <label className="field-label" htmlFor={localId}>
          {children}
          {(required && type != "radio" && type != "checkbox")?<span className="field-required-text">{typeof required == 'boolean' ? 'required': required}</span>:''}
        </label>
      }
      {type != 'label' &&
        <FieldTag id={localId} onChange={(e) => onFieldChange(e)} {...props} ref={ref} label={children} />
      }

      {maxLength &&
        <span className={"field-max-length"}>{(localValue?maxLength-localValue.length:maxLength)}</span>
      }

      {error &&
        <small className="field-error">{error}</small>
      }
		</div>
  );
})

Field.select = React.forwardRef((props, ref) => {
  return (
    <Field type="select" {...props} ref={ref} />
  )
})
Field.switch = React.forwardRef((props, ref) => {
  return (
    <Field type="switch" {...props} ref={ref} />
  )
})

Field.defaultProps = {
  type: 'text'
}

export { Field }
