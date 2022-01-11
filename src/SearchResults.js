import React from 'react';
import Wheel from './Wheel';

function SearchResults({ images }) {
	function copyUrl(event) {
		let link = event.target.src;
		let dummy = document.createElement('input'),
			text = link;
		document.body.appendChild(dummy);
		dummy.value = text;
		dummy.select();
		document.execCommand('copy');
		document.body.removeChild(dummy);
	}
	if (!images.length) {
		return <h2>No Images Found!</h2>;
	}

	return (
		<div className='gallery'>
			{images.map((image) => (
				<div key={image.id} className='gif'>
					<img
						src={image.images.downsized_large.url}
						alt={image.title}
						onClick={copyUrl}
					/>
				</div>
			))}
		</div>
	);
}
export default SearchResults;
