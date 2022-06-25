import { readFile } from 'fs/promises';

export const read = async () => {
	const inputFile = new URL('./files/fileToRead.txt', import.meta.url);

	try {
		const data = await readFile(inputFile, { encoding: 'utf8' });
		console.log(data);
	} catch {
		throw new Error('FS operation failed');
	}
};

// for test with "npm run fs:read"
read();