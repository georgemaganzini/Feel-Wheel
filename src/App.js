import React from 'react';
import { useState, useEffect } from 'react';
import TempSearch from './TempSearch';
import SearchResults from './SearchResults';
import Wheel from './Wheel';

function App() {
	const searchOptions = {
		key: process.env.REACT_APP_GIPHY_KEY,
		limit: 25,
		api: 'https://api.giphy.com/v1/gifs',
		endpoint: '/search',
	};

	const [images, setImages] = useState([]);
	const [searchString, setSearchString] = useState('feel');
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

	return (
		<div>
			welcome to the feel wheel
			<Wheel />
			<TempSearch
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
			<SearchResults images={images} />
		</div>
	);
}

export default App;
