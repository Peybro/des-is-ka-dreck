export const load = () => {
	function randomInt(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	return {
		randomInt: randomInt(1, 39)
	};
};
