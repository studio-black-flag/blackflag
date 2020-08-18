import React, {Fragment, useState, useEffect, useRef } from 'react'
import {Icon, Button} from '../../'

const FieldImage = React.forwardRef(({onChange, label, type, multiple, max, value, ...props}, ref) => {
  const [file, setFile] = useState(null)
  const [base64, setBase64] = useState(null)

  const onInputFile = (e) => {
    let reader  = new FileReader();
    reader.onloadend = function () {
      setBase64(reader.result)
      ref.current.value = null
    }
    setFile(e.target.files[0])
    reader.readAsDataURL(e.target.files[0]);
  }

  useEffect(() => {
    if (onChange) onChange(file, base64)
  },[file])


  if(!ref) ref = useRef()
  useEffect(() => {
    if (value) setBase64(value)
  },[])

  return (
    <div className={"field-image-area"+(base64?' has-file':'')}>
      <input accept={props.accept} type="file" onChange={e => onInputFile(e)}  {...props} ref={ref}/>
      {!base64 &&
        <Fragment>
          <span>{label}</span>
          <Button><Icon name="upload"/></Button>
        </Fragment>
      }
      {base64 &&
        <Fragment>
          <img src={base64} />
          <Button className="circle field-image-remove" onClick={() => {setFile(null); setBase64(null);}}><Icon name="minus"/></Button>
        </Fragment>
      }
    </div>
  );
})

FieldImage.defaultProps = {
   accept: "image/x-png,image/jpeg"
}

export { FieldImage };
