import { readFile } from 'fs/promises';

export const read = async () => {
	try {
		const inputFile = new URL('./files/fileToRead.txt', import.meta.url);
		const data = await readFile(inputFile, { encoding: 'utf8' });
		console.log(data);
	} catch {
		throw new Error('FS operation failed');
	}
};