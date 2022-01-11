import React from 'react';

function Search({ handleSubmit, handleChange, searchString }) {
	return (
		<form onSubmit={handleSubmit} className='form-horizontal'>
			<input
				placeholder='Search'
				type='text'
				name='searchString'
				required
				onChange={handleChange}
				value={searchString}
			/>
			<button type='submit'>submit</button>
		</form>
	);
}

export default Search;
