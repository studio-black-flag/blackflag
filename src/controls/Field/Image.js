import React, {Fragment, useState, useEffect, useRef, useCallback } from 'react'
import { Button } from '../../controls/Button'
import { Icon } from '../../media/Icon'

const FieldImage = React.forwardRef(({onChange, label, labelRemove, value, accept, maxWidth, maxHeight, type, resize, cropShape, aspect, ...props}, ref) => {
  const [valueImage, setValueImage] = useState("")

  if(!ref) ref = useRef()

  const resizeImage = (base64Str) => {
    return new Promise((resolve) => {
      let img = new Image()
      img.src = base64Str
      img.onload = () => {
        let canvas = document.createElement('canvas')
        const MAX_WIDTH = maxWidth
        const MAX_HEIGHT = maxHeight
        let width = img.width
        let height = img.height

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width
            width = MAX_WIDTH
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height
            height = MAX_HEIGHT
          }
        }
        canvas.width = width
        canvas.height = height
        let ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, width, height)
        resolve(canvas.toDataURL())
      }
    })
  }

  const onInputFile = (e) => {
    let reader  = new FileReader();
    reader.onloadend = function () {
      setResizeImage(reader.result)
    }
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  useEffect(() => {
    if (value) {
      setValueImage(value)
    }
  },[value])

  const setResizeImage = useCallback(async image => {
    try {
      const result = await resizeImage(image);
      setValueImage(result);
      if (onChange) onChange(result)
    } catch (e) {
      console.error(e)
    }
  }, [])

  return (
    <div className={"field-image-content"+(valueImage?' has-file':'')}>
      <input accept={accept} type="file" onChange={e => onInputFile(e)}  {...props} ref={ref}/>
      <div className="field-image-area">
        {valueImage && <img src={valueImage} /> }
      </div>
        {!valueImage &&
          <div className="field-image-actions">
            <a><Icon name="add-picture"/> <span>{label}</span> </a>
          </div>
        }
        {valueImage &&
          <div className="field-image-actions">
            <a onClick={() => {setValueImage("");ref.current.value=""; onChange("");}}>
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
   maxWidth: 640,
   maxHeight: 640
}

export { FieldImage };
