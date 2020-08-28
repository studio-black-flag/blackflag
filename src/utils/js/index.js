import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

export default {
	scrollToId: (id, offset=0) => {
		window.scroll({
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
		 let timer = setTimeout(() => callback(), delay)
		 return () => {
			 clearTimeout(timer)
		 }
	},

 onWindowResize: (callback, states=[]) => {
	 useLayoutEffect(() => {
     function updateSize() {
       callback(window.innerWidth, window.innerHeight);
     }
     window.addEventListener('resize', updateSize);
     updateSize();
     return () => window.removeEventListener('resize', updateSize);
   }, states);
	},
 onWindowScroll: (callback, states=[]) => {
	 useLayoutEffect(() => {
     function updateScroll() {
       callback(window.scrollX, window.scrollY);
     }
     window.addEventListener('scroll', updateScroll);
     updateScroll();
     return () => window.removeEventListener('scroll', updateScroll);
   }, states);
	},

	lerp: (start, end, amt) => {
		return (1-amt)*start+amt*end
	},

	randomId: () => {
	  // return 'id' + new Date().getTime()
	  return 'id' + Math.random().toString(36).substr(2, 9)
	},

	createScriptTag: src => {
		const script = document.createElement("script");
		script.src = src;
		script.async = true;
		document.body.appendChild(script);
	}
}



// function useWindowSize() {
//   const [size, setSize] = useState([0, 0]);
//
//   return size;
// }
