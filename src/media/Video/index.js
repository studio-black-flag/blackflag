import React from 'react'

const Video = ({className, hide, src, ...props}) => {
  if (hide) return null

  let c = (
    'Video'+
    (className?' '+className:'')
  )
  return (
    <div className={c} {...props}>
      <iframe src={src} frameBorder="0" allowFullscreen></iframe>
    </div>
  );

};

export { Video };
