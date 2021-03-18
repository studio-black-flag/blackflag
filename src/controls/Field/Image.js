import React, {Fragment, useState, useEffect, useRef, useCallback } from 'react'
import Cropper from 'react-easy-crop'
import getCroppedImg from '../../utils/js/cropImage'

import { Button } from '../../controls/Button'
import { Icon } from '../../media/Icon'

const FieldImage = React.forwardRef(({onChange, label, labelRemove, value, accept, type, resize, cropShape, ...props}, ref) => {
  const [valueImage, setValueImage] = useState(null)
  const [tempImage, setTempImage] = useState(null)
  const [finalImage, setFinalImage] = useState(null)

  if(!ref) ref = useRef()

  const onInputFile = (e) => {
    let reader  = new FileReader();
    reader.onloadend = function () {
      setTempImage(reader.result)
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  useEffect(() => {
    console.log("value: ",value);
    if (value) {
      setValueImage(value)
    } else {
      setFinalImage(null);
      setTempImage(null);
      onChange(null);
    }
  },[value])

  // CROP
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        tempImage,
        croppedAreaPixels,
        rotation,
        resize
      )
      if (onChange) onChange(croppedImage)
      setFinalImage(croppedImage)
      setTempImage(null)

    } catch (e) {
      console.error(e)
    }
  }, [croppedAreaPixels, rotation])

  return (
    <div className={"field-image-content"+(finalImage?' has-file':'')}>
    {tempImage &&
      <div className="field-image-crop">
        <div  className="field-image-cropper">
          <Cropper
            image={tempImage}
            crop={crop}
            zoom={zoom}
            aspect={1 / 1}
            cropShape={cropShape}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>
        <div className="field-image-crop-actions">
          <Button className="small" onClick={e => setTempImage(null)}>Cancela</Button>
          <Button className="primary small" onClick={showCroppedImage}>Confirma</Button>
        </div>
      </div>
    }
    {!tempImage &&

      <div className="field-image-select">
        <input accept={accept} type="file" onChange={e => onInputFile(e)}  {...props} ref={ref}/>
        <div className="field-image-area">
          {valueImage && <img src={valueImage} /> }
        </div>
          {!finalImage &&
            <div class="field-image-actions">
              <a><Icon name="add-picture"/> <span>{label}</span> </a>
            </div>
          }
          {finalImage &&
            <div class="field-image-actions">
              <a onClick={() => {setFinalImage(null); onChange("");}}>
                <Icon name="minus-circled"/> <span>{labelRemove}</span>
              </a>
            </div>
          }
      </div>
    }
    </div>
  );
})

FieldImage.defaultProps = {
   accept: "image/x-png,image/jpeg",
   label: "Enviar foto",
   labelRemove: "Remover foto",
   resize: [640, 640],
   cropShape: "rect"
}

export { FieldImage };
