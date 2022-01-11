import React from 'react';
import { useState, useEffect } from 'react';
import TempSearch from './TempSearch';
import SearchResults from './SearchResults';
import Wheel from './Wheel';
import Header from './Header';

function App() {
	const searchOptions = {
		key: process.env.REACT_APP_GIPHY_KEY,
		limit: 25,
		api: 'https://api.giphy.com/v1/gifs',
		endpoint: '/search',
	};

	const [images, setImages] = useState([]);
	const [searchString, setSearchString] = useState('emoji');
	const [lastSearch, setLastSearch] = useState('');

	useEffect(() => {
		getImages(searchString);
	}, []);

	function getImages(searchString) {
		const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString}&limit=${searchOptions.limit}&lang=en`;

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setImages(response.data);
				setLastSearch(searchString);
				setSearchString('');
			})
			.catch(console.error);
	}

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		getImages(searchString);
	}

	function handleClick(event) {
		setSearchString(event.data);
		console.log(event.data);
		getImages(searchString);
	}

	return (
		<div id='app'>
			<Header
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
			<div className='main'>
				<div id='wheel-container'>
					<Wheel getImages={getImages} />
				</div>

				<SearchResults className='results-div' images={images} />
			</div>
		</div>
	);
}

export default App;
