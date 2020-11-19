import React, {useState, useEffect, useRef} from 'react';
import InputMask from 'react-input-mask';
import { utils, Spinner } from '../../'

import {FieldDefault}       from './Default'
import {FieldRadio}         from './Radio'
import {FieldTextarea}      from './Textarea'
import {FieldCheckbox}      from './Checkbox'
import {FieldFile}          from './File'
import {FieldSwitch}        from './Switch'
import {FieldSelect}        from './Select'
import {FieldPassword}      from './Password'
import {FieldImage}         from './Image'
import {FieldCurrency}      from './Currency'
import {FieldPhone}         from './Phone'
import {FieldSlug}          from './Slug'
import {FieldCep}           from './Cep'
import {FieldColor}         from './Color'

const Field = React.forwardRef(({children, className, hide, onChange, error, loading, id, disabled, focus, maxLengthDisplay, ...props}, ref) => {
  if (hide) return null
  const { type, required, maxLength, mask } = props

  let localId
  if (id) {
    localId = id
  } else {
    localId = utils.randomId()
  }

  if (!ref) {
    ref = useRef()
  }

  useEffect(() => {
    if (focus) {
      ref.current.focus()
    }
  }, [])

  useEffect(() => {
    if (loading === false && ref.current && ref.current.focus) {
      // console.log('ref.current',ref.current);
      ref.current.focus()
    }
  }, [loading])

  const [localValue, setLocalValue] = useState()
  function onFieldChange(e) {
    if (e && e.target) {
      setLocalValue(e.target.value)
    }
    if (onChange) {
      onChange(e)
    }
  }
  useEffect(() => {
    if (props.value) {
      setLocalValue(props.value)
    }
  }, [props.value])

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
    case 'image':             FieldTag = FieldImage; break;
    case 'currency':          FieldTag = FieldCurrency; break;
    case 'phone':             FieldTag = FieldPhone; break;
    case 'slug':              FieldTag = FieldSlug; break;
    case 'cep':               FieldTag = FieldCep; break;
    case 'color':            FieldTag = FieldColor; break;
  }
  if (mask) {
    FieldTag = InputMask
  }

  return (
    <div className={c}>
      {(children && type != "file" && type != "image") &&
        <label className="field-label" htmlFor={localId}>
          {children}
          {(required && type != "radio" && type != "checkbox")?<span className="field-required-text"></span>:''}
        </label>
      }
      {type != 'label' &&
        <FieldTag disabled={disabled || loading} id={localId} onChange={(e) => onFieldChange(e)} {...props} ref={ref} label={children} />
      }

      {loading &&
        <span className="field-loading">
          <Spinner />
        </span>
      }
      <div className="field-footer">
        {error &&
          <small className="field-error">{error}</small>
        }
        {(maxLength && maxLengthDisplay) &&
          <span className={"field-max-length"}>{(localValue?maxLength-localValue.length:maxLength)}</span>
        }
      </div>
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
