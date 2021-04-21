import React, { useState } from 'react';
import GaligoLogo from './GaligoLogo';
import './Navbar.css';

export default function Navbar() {
	const [ colorChange, setColorchange ] = useState(false);
	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};
	window.addEventListener('scroll', changeNavbarColor);
	return (
		<nav className={`Navbar ${!colorChange ? 'default' : 'scrolled'}`}>
			<GaligoLogo />
		</nav>
	);
}
