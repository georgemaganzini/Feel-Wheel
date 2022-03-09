import React from 'react';
import Search from './Search';

function Header({ handleChange, handleSubmit, searchString }) {
	return (
		<div className='header'>
			<h1>Welcome to the Feel Wheel</h1>{' '}
			<h3>Right-Click Anywhere to Start, Left Click to Save URL</h3>
			<h5>(Long Press on Android)</h5>
			<Search
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
		</div>
	);
}

export default Header;
