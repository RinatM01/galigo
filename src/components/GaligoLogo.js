import React from 'react';
import './GaligoLogo.css';
import img from '../assets/bitmap374709aa.png';

const GaligoLogo = () => {
	return (
		<div className="galigoDiv">
			<img className="galigoLogo" src={img} />
			<div className="galigoName">galigo</div>
		</div>
	);
};

export default GaligoLogo;
