import React from 'react';
import oMenu from 'o-menu';
import { useEffect } from 'react';

function Wheel(props) {
	useEffect(() => {
		const omenu = oMenu('app', {
			menu: {
				innerCircleRadius: 55,
			},
			nthSlice: {
				contentSize: 22,
				iconDistanceFromInnerCircle: 5,
				parentFillMode: -0.3,
				styles: {
					contentContainer: {
						fontSize: 22,
						color: '#efefef',
					},
				},
			},
			slice: {
				contentSize: 30,
				iconDistanceFromInnerCircle: 10,
				styles: {
					contentContainer: {
						fontSize: 30,
						color: '#efefef',
					},
				},
			},
			// onOpen: onOpenCb,
			onEndCloseAnimation: (val) => {
				if (val) alert(`You want to: ${val}`);
			},
		});

		omenu.on('sliceEnter', (ev) => {
			console.log(ev); // => oMenu Event
		});

		document.body.addEventListener('click', (ev) => {
			ev.preventDefault();

			omenu.open(ev, {
				slices: [
					{
						content: 'A',
						styles: {
							defaults: {
								fill: '#8BC34A',
							},
						},
						data: 'send email',
					},
					{
						content: 'B',
						styles: {
							defaults: {
								fill: '#F44336',
							},
						},
						data: 'delete user',
					},
				],
			});
		});

	}, []);

	return (
		<div id='app'>
			<div>hi</div>
		</div>
	);
}

export default Wheel;
