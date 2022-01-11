import React from 'react';
import TempSearch from './TempSearch';

function Header({ handleChange, handleSubmit, searchString }) {
	return (
		<div className='header'>
			<h1>Welcome to the Feel Wheel</h1>
			<h3>Click anywhere to start</h3>
		</div>
	);
}

export default Header;
