import React from 'react';
import oMenu from 'o-menu';
import { useEffect } from 'react';

function Wheel({ getImages }) {
	useEffect(() => {
		const omenu = oMenu('app', {
			menu: {
				styles: {
					defaults: {
						cursor: 'pointer',
						position: 'fixed',
					},
					innerCircle: {
						fill: '#8fa6cb',
					},
				},
			},

			slice: {
				contentSize: 40,
				iconDistanceFromInnerCircle: 10,
				onClick: function (event) {
					console.log('hi');
				},
				styles: {
					contentContainer: {
						fontSize: 30,
					},
					// not working, needs state?
					// hover: {
					// 	opacity: 0.5,
					// },
				},
			},
			nthSlice: {
				contentSize: 25,
				iconDistanceFromInnerCircle: 6,
				parentFillMode: -0.1,
				styles: {
					contentContainer: {
						fontSize: 20,
					},
				},
			},
		});

		omenu.on('sliceClick', (ev) => {
			getImages(ev.data);
		});

		document.body.addEventListener('contextmenu', (ev) => {
			ev.preventDefault();
			omenu.open(ev, {
				slices: [
					{
						content: '😂',
						styles: {
							defaults: {
								fill: '#454E9E',
							},
							hover: {
								opacity: 0.5,
							},
						},
						data: '😂',
						slices: [
							{
								content: '🤣',
								styles: {
									defaults: {
										fill: '#8BC34A',
									},
								},
								data: '🤣',
							},
							{
								content: '😅',
								styles: {
									defaults: {
										fill: '#F44336',
									},
								},
								data: '😅',
							},
							{
								content: '😏',
								styles: {
									defaults: {
										fill: '#8BC34A',
									},
								},
								data: '😏',
							},
							{
								content: '🥴',
								styles: {
									defaults: {
										fill: '#8BC34A',
									},
								},
								data: '🥴',
							},
							{
								content: '☠',
								styles: {
									defaults: {
										fill: '#F44336',
									},
								},
								data: 'dead',
							},
						],
					},
					{
						content: '😡',
						styles: {
							defaults: {
								fill: '#BF1A2F',
							},
						},
						data: '😡',
						slices: [
							{
								content: '😤',
								styles: {
									defaults: {
										fill: '#8BC34A',
									},
								},
								data: 'fuming',
							},
							{
								content: '😈',
								styles: {
									defaults: {
										fill: '#F44336',
									},
								},
								data: 'devil',
							},
							{
								content: '🔪',
								styles: {
									defaults: {
										fill: '#8BC34A',
									},
								},
								data: 'violence',
							},
							{
								content: '🤬',
								styles: {
									defaults: {
										fill: '#8BC34A',
									},
								},
								data: 'very angry',
							},
							{
								content: '👎',
								styles: {
									defaults: {
										fill: '#F44336',
									},
								},
								data: 'thumbs down',
							},
						],
					},
					{
						content: '💖',
						styles: {
							defaults: {
								fill: '#F00699',
							},
						},
						data: '💖',
						slices: [
							{
								content: '😍',
								styles: {
									defaults: {
										fill: '#8BC34A',
									},
								},
								data: '😍',
							},
							{
								content: '🥰',
								styles: {
									defaults: {
										fill: '#F44336',
									},
								},
								data: 'blushing',
							},
							{
								content: '🥺',
								styles: {
									defaults: {
										fill: '#8BC34A',
									},
								},
								data: '🥺',
							},
							{
								content: '🤗',
								styles: {
									defaults: {
										fill: '#8BC34A',
									},
								},
								data: '🤗',
							},
							{
								content: '😘',
								styles: {
									defaults: {
										fill: '#F44336',
									},
								},
								data: '😘',
							},
						],
					},
					{
						content: '🤨',
						styles: {
							defaults: {
								fill: '#F44336',
							},
						},
						data: '🤨',
						slices: [
							{
								content: '🤡 ',
								styles: {
									defaults: {
										fill: '#8BC34A',
									},
								},
								data: '🤡 ',
							},
							{
								content: '🤔',
								styles: {
									defaults: {
										fill: '#F44336',
									},
								},
								data: '🤔',
							},
							{
								content: '🧐',
								styles: {
									defaults: {
										fill: '#8BC34A',
									},
								},
								data: '🧐',
							},
							{
								content: '🤥',
								styles: {
									defaults: {
										fill: '#8BC34A',
									},
								},
								data: '🤥',
							},
							{
								content: '🙃',
								styles: {
									defaults: {
										fill: '#F44336',
									},
								},
								data: 'awkward',
							},
						],
					},
					{
						content: '👋',
						styles: {
							defaults: {
								fill: '#018E42',
							},
						},
						data: '👋',
						slices: [
							{
								content: '🙌',
								styles: {
									defaults: {
										fill: '#8BC34A',
									},
								},
								data: 'praise',
							},
							{
								content: '🙏',
								styles: {
									defaults: {
										fill: '#F44336',
									},
								},
								data: '🙏',
							},
							{
								content: '🤙',
								styles: {
									defaults: {
										fill: '#8BC34A',
									},
								},
								data: 'hang loose',
							},
							{
								content: '👍',
								styles: {
									defaults: {
										fill: '#8BC34A',
									},
								},
								data: 'thumbs up',
							},
							{
								content: '👏',
								styles: {
									defaults: {
										fill: '#F44336',
									},
								},
								data: '👏',
							},
						],
					},
					{
						content: '😉',
						styles: {
							defaults: {
								fill: '#F7D002',
							},
						},
						data: '😉',
						slices: [
							{
								content: '🔥',
								styles: {
									defaults: {
										fill: '#8BC34A',
									},
								},
								data: '🔥',
							},
							{
								content: '💯',
								styles: {
									defaults: {
										fill: '#F44336',
									},
								},
								data: '💯',
							},
							{
								content: '🥳',
								styles: {
									defaults: {
										fill: '#8BC34A',
									},
								},
								data: 'party',
							},
							{
								content: '😎',
								styles: {
									defaults: {
										fill: '#8BC34A',
									},
								},
								data: '😎',
							},
							{
								content: '✨',
								styles: {
									defaults: {
										fill: '#F44336',
									},
								},
								data: 'sparkle',
							},
						],
					},
				],
			});
		});
	}, []);

	return <></>;
}

export default Wheel;
