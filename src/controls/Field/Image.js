import React, {Fragment, useState, useEffect, useRef } from 'react'
import {Icon, Button} from '../../'

const FieldImage = React.forwardRef(({onChange, label, type, multiple, max, value, ...props}, ref) => {
  const [file, setFile] = useState(null)

  const onInputFile = (e) => {
    let reader  = new FileReader();
    reader.onloadend = function () {
      setFile(reader.result)
      ref.current.value = null
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  useEffect(() => {
    if (onChange) onChange(file)
  },[file])


  if(!ref) ref = useRef()
  useEffect(() => {
    if (value) setFile(value)
  },[])

  return (
    <div className={"field-image-area"+(file?' has-file':'')}>
      <input accept={props.accept} type="file" onChange={e => onInputFile(e)}  {...props} ref={ref}/>
      {!file &&
        <Fragment>
          <span>{label}</span>
          <Button><Icon name="upload"/></Button>
        </Fragment>
      }
      {file &&
        <Fragment>
          <img src={file} />
          <Button className="circle field-image-remove" onClick={() => setFile(null)}><Icon name="minus"/></Button>
        </Fragment>
      }
    </div>
  );
})

FieldImage.defaultProps = {
   accept: "image/x-png,image/jpeg"
}

export { FieldImage };
