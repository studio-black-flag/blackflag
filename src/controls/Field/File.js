import React, {Fragment, useState, useEffect } from 'react'

import { Button } from '../../controls/Button'
import { Icon } from '../../media/Icon'

const FieldFile = React.forwardRef(({onChange, label, max, ...props}, ref) => {
  const [files, setFiles] = useState([])

  const { multiple } = props

  const onInputFile = (e) => {
    if (multiple) {
      let arr = [...files, ...Array.from(e.target.files)]
      if (max) {
        let n = max
        arr.splice(n, arr.length-n)
      }
      setFiles(arr);
    } else {
      setFiles(Array.from(e.target.files));
    }
    e.target.value = ""
  }

  const removeFile = (index) => {
    let arr = [...files]
    arr.splice(index,1)
    setFiles(arr);
  }

  useEffect(() => {
    if (onChange) onChange(files)
  },[files])

  return (
    <Fragment>
      <Button>
        <span>{label}</span>
        <input alt="" title="" onChange={e => onInputFile(e)}  {...props} ref={ref}/>
      </Button>

      { files.length != 0 &&
        <ul>
        {
          files.map((item, i) => {
            return (
              <li key={i}><span><Icon name="attach" />{item.name}</span> <Icon onClick={() => removeFile(i)} name="close" /></li>
            )
          })
        }
        </ul>
      }
    </Fragment>
  );
})

export { FieldFile };
