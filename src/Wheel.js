import React from 'react';
import oMenu from 'o-menu';
import { useEffect } from 'react';

function Wheel(props) {
	useEffect(() => {
		const omenu = oMenu('app', {
			menu: {},

			slice: {
				contentSize: 40,
				iconDistanceFromInnerCircle: 10,
				styles: {
					contentContainer: {
						fontSize: 30,
						color: '#efefef',
					},
				},
			},
			nthSlice: {
				contentSize: 25,
				iconDistanceFromInnerCircle: 6,
				parentFillMode: -0.1,
				styles: {
					contentContainer: {
						fontSize: 20,
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
