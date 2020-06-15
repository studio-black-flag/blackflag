import React, { useEffect } from 'react';

import {FieldDefault} from './Default'
import {FieldRadio} from './Radio'
import {FieldTextarea} from './Textarea'
import {FieldCheckbox} from './Checkbox'
import {FieldFile} from './File'

const Field = function({children, className, hide, onChange, error, ...props}) {
  if (hide) return null

  const { type, id, disabled, required } = props

  function onFieldChange(e) {
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
  }

  return (
    <div className={c}>
      {children &&
        <label className="field-label" htmlFor={id}>
          {children}
          {(required && type != "radio" && type != "checkbox")?<span className="field-required-text">{typeof required == 'boolean' ? 'required': required}</span>:''}
        </label>
      }

      <FieldTag onChange={(e) => onFieldChange(e)} {...props} />

      {error &&
        <small className="field-error">{error}</small>
      }
		</div>
  );
}

Field.defaultProps = {
  type: 'text'
}

export {Field}
