export const fadeIn = (direction, delay, index) => {
	return {
		offscreen: {
			opacity: 0,
			y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
			x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
		},
		onscreen: {
			y: 0,
			x: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				direction: 1.2,
				delay: delay * index,
				ease: [0.25, 0.25, 0.25, 0.75],
			},
		},
	};
};
