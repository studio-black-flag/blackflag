import React, {Fragment, useState, useEffect } from 'react'

export function FieldFile({onChange, max, ...props}) {
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
      <input onChange={e => onInputFile(e)}  {...props}/>

      { files.length != 0 &&
        <ul>
        {
          files.map((item, i) => {
            return (
              <li key={i}>{item.name} <Icon onClick={() => removeFile(i)} name="close" /></li>
            )
          })
        }
        </ul>
      }
    </Fragment>
  );
}
