import React, {Fragment, useState, useEffect, useRef } from 'react'

import { Button } from '../../controls/Button'
import { Icon } from '../../media/Icon'

const FieldImage = React.forwardRef(({onChange, label, labelRemove, type, multiple, max, value, crop, ...props}, ref) => {
  const [file, setFile] = useState(null)
  const [base64, setBase64] = useState(null)

  const onInputFile = (e) => {
    let reader  = new FileReader();
    reader.onloadend = function () {
      if (!crop) {
        setBase64(reader.result)
      }
      ref.current.value = null
    }
    setFile(e.target.files[0])
    reader.readAsDataURL(e.target.files[0]);
  }

  useEffect(() => {
    if (onChange) onChange(file)
  },[file])

  useEffect(() => {
    if (onChange) onChange(value)
  },[base64])

  if(!ref) ref = useRef()
  useEffect(() => {
    if (value) {
      setBase64(value)
    }
    else {
      setFile(null);
      setBase64(null);
      onChange(null);
    }
  },[value])

  return (
    <div className={"field-image-content"+(base64?' has-file':'')}>
      <input accept={props.accept} type="file" onChange={e => onInputFile(e)}  {...props} ref={ref}/>
      <div className="field-image-area">
        {base64 && <img src={base64} /> }
      </div>
        {!base64 &&
          <div class="field-image-actions">
            <a><Icon name="add-picture"/> <span>{label}</span> </a>
          </div>
        }
        {base64 &&
          <div class="field-image-actions">
            <a onClick={() => {setFile(null); setBase64(null); onChange("");}}>
              <Icon name="minus-circled"/> <span>{labelRemove}</span>
            </a>
          </div>
        }
    </div>
  );
})

FieldImage.defaultProps = {
   accept: "image/x-png,image/jpeg",
   label: "Enviar foto",
   labelRemove: "Remover foto",
}

export { FieldImage };
