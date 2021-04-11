import React, {useRef} from 'react'

const FieldTextarea = React.forwardRef(({onChange, ...props}, ref) => {
  if (!ref) {
    ref = useRef()
  }
  const onLocalChange = e => {
    onChange(e)
    ref.current.style.height = 'auto'
    ref.current.style.height = ref.current.scrollHeight + 'px'
  }
  return (
    <textarea {...props} onChange={onLocalChange} ref={ref} />
  )
})

export { FieldTextarea };
