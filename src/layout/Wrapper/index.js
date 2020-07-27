import React from 'react'

const Wrapper = ({children, className, onVisible, hide, ...props}) => {
  if (hide) return null

  let visible = false;
  // const ref = useRef()

  // window.addEventListener('scroll', function() {
  //   if (visible != isElementInViewport()) {
  //     visible = isElementInViewport()
  //     onVisible(visible)
  //   }
  // });
  //
  // const isElementInViewport = () => {
  //   if (ref.current) {
  //     var rect = ref.current.getBoundingClientRect();
  //     return  rect.bottom > 0 &&
  //             rect.right > 0 &&
  //             rect.left < (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */ &&
  //             rect.top < (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */ ;
  //   }
  // }

  let c = (
    'Wrapper'+
    (className?' '+className:'')
  )

  return (
    <div className={c} {...props}>{children}</div>
  );
};

export { Wrapper };
