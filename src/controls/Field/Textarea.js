import React, {useRef} from 'react'

const FieldTextarea = React.forwardRef((props, ref) => {
  if (!ref) {
    ref = useRef()
  }
  const onLocalChange = e => {
    props.onChange(e)
    console.log(e.target.scrollHeight);
    // ref.current.style.height = '200px'
    ref.current.style.height = 'auto'
    ref.current.style.height = ref.current.scrollHeight + 'px'
  }
  return (
    <textarea {...props} onChange={onLocalChange} ref={ref}>{props.value}</textarea>
  )
})

export { FieldTextarea };
