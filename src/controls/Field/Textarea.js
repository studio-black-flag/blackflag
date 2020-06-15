import React from 'react'

export function FieldTextarea(props) {
  return (
    <textarea {...props}>{props.value}</textarea>
  )
}
