import React from 'react'

import {Container} from '../'

const Navbar = function(props) {

	if (props.hide) return null
  const {children, className} = props
  let c = (
    'Navbar'+
    (className?' '+className:'')
  )

  return (
    <nav className={c}>
			{children}
		</nav>
  );

};

const brand = function(props) {
	return <div className="Navbar-brand">{props.children}</div>;
}
const item = function(props) {
	return <li className="Navbar-menu-item">{props.children}</li>;
}

const menu = function(props) {
	let collapse = (typeof props.collapse === 'string'?props.collapse:'md')
	return (
		<div className={"Navbar-menu collapse_"+collapse}>
			<ul className="Navbar-menu-inner">
				{props.children}
			</ul>
		</div>
	);
}

Navbar.brand = brand;
Navbar.menu = menu;
Navbar.menu.item = item;
Navbar.menu.defaultProps = {
	collapse: null
}

export  { Navbar } ;
