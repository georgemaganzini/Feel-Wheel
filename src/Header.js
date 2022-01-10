import React from 'react';
import TempSearch from './TempSearch';

function Header({ handleChange, handleSubmit, searchString }) {
	return (
		<div className='header'>
			<h1>Welcome to the Feel Wheel</h1>
			<TempSearch
				className='search'
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
		</div>
	);
}

export default Header;
