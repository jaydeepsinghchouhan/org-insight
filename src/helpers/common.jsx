import { useEffect, useState } from "react";

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

function buildHierarchy(employees, managerId = null) {
	return employees
	  .filter(emp => emp.managerId === managerId)
	  .map(emp => ({
		...emp,
		children: buildHierarchy(employees, emp.id)
	  }));
  }

function useDebounce(value, delay) {
	const [debouncedValue, setDebouncedValue] = useState(value);
  
	useEffect(() => {
	  const handler = setTimeout(() => setDebouncedValue(value), delay);
	  return () => clearTimeout(handler);
	}, [value, delay]);
  
	return debouncedValue;
  }

export {
	getRandomColor,
	buildHierarchy,
	useDebounce,
};