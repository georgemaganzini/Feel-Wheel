import React from 'react';
import oMenu from 'o-menu';
import { useEffect } from 'react';

function Wheel({ getImages }) {
	useEffect(() => {
		const omenu = oMenu('wheel-container', {
			menu: {
				styles: {
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
				onClick: function (event) {
					console.log('hi');
				},
				styles: {
					contentContainer: {
						fontSize: 20,
					},
					// hover: {
					// 	opacity: 0.5,
					// },
				},
			},
		});

		omenu.on('sliceClick', (ev) => {
			getImages(ev.data);
		});

		document.body.addEventListener('click', (ev) => {
			ev.preventDefault();

			omenu.open(ev, {
				slices: [
					{
						content: '😂',
						styles: {
							defaults: {
								fill: '#454E9E',
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
								data: '☠',
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
								data: '😤',
							},
							{
								content: '😈',
								styles: {
									defaults: {
										fill: '#F44336',
									},
								},
								data: '😈',
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
								data: '🤬',
							},
							{
								content: '👎',
								styles: {
									defaults: {
										fill: '#F44336',
									},
								},
								data: '👎',
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
								data: '🥰',
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
								data: '🙃',
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
								data: '🙌',
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
								data: '🤙',
							},
							{
								content: '👍',
								styles: {
									defaults: {
										fill: '#8BC34A',
									},
								},
								data: '👍',
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
								data: '🥳',
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
								content: '💅',
								styles: {
									defaults: {
										fill: '#F44336',
									},
								},
								data: '💅',
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
