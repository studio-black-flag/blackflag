import React, {useRef} from 'react'

const FieldTextarea = React.forwardRef(({value, ...props}, ref) => {
  if (!ref) {
    ref = useRef()
  }
  const onLocalChange = e => {
    props.onChange(e)
    ref.current.style.height = 'auto'
    ref.current.style.height = ref.current.scrollHeight + 'px'
  }
  return (
    <textarea {...props} onChange={onLocalChange} ref={ref}>{value}</textarea>
  )
})

export { FieldTextarea };
