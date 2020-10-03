import React, {useEffect} from 'react'

const FieldSlug = React.forwardRef(({value, onChange, ...props}, ref) => {

  const mask = text => {
    return text ? text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      : ''
  }
  // useEffect(() => {
  //   if (ref.current) {
  //     // console.log(ref.current);
  //     // ref.current.onChange()
  //   }
  // }, [value])
  return (
    <input
      onChange={onChange}
      value={mask(value)}
      ref={ref}
      {...props}
    />
  );
})

export { FieldSlug }
