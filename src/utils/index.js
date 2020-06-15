import React, { useState, useEffect, useRef } from 'react';

export default {
	scrollToId: (id, offset=0) => {
		window.scrollTo({
		  top: (document.getElementById(id).getBoundingClientRect().top - document.body.getBoundingClientRect().top) - offset,
		  behavior: 'smooth'
		});
	},

 interval: (callback, delay) => {
	  const savedCallback = useRef();

	  // Remember the latest callback.
	  useEffect(() => {
	    savedCallback.current = callback;
	  }, [callback]);

	  // Set up the interval.
	  useEffect(() => {
	    function tick() {
	      savedCallback.current();
	    }
	    if (delay !== null) {
	      let id = setInterval(tick, delay);
	      return () => clearInterval(id);
	    }
	  }, [delay]);
	},

 timeout: (callback, delay) => {
		 let timer1 = setTimeout(() => callback(), delay)
		 return () => {
			 clearTimeout(timer1)
		 }
	},

	lerp: (start, end, amt) => {
		return (1-amt)*start+amt*end
	},

	removeProps: (props, remove) => {
	  let localProps = {}
	  Object.assign(localProps, props)
	  remove.forEach((item, i) => {
	    delete localProps[item]
	  });
	  return localProps
	}
}
