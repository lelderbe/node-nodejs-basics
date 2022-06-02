export const parseEnv = () => {
	const outputData = [];

	for (let key in process.env) {
		if (key.startsWith('RSS_')) {
			outputData.push(key + '=' + process.env[key]);
		}
	}

	console.log(outputData.join('; '));
};