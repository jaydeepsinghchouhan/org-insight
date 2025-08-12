const colorOptions = [
	'bg-secondary',
	'bg-primary',
	'bg-danger',
	'bg-warning',
	'bg-info',
	'bg-success',
];

let lastColor = null;

const getRandomColor = () => {
	let randomColor;

	do {
		const randomIndex = Math.floor(Math.random() * colorOptions.length);
		randomColor = colorOptions[randomIndex];
	} while (randomColor === lastColor);
	lastColor = randomColor;
	return randomColor;
};

export {
	getRandomColor,
};