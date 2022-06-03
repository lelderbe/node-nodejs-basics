import * as fs from 'fs/promises';

export const rename = async () => {
	const from = new URL('./files/wrongFilename.txt', import.meta.url);
	const to = new URL('./files/properFilename.md', import.meta.url);

	try {
		await fs.stat(to);
		throw new Error('FS operation failed');
	} catch (err) {
		if (err.message === 'FS operation failed') {
			throw err;
		}
	}

	try {
		await fs.rename(from, to);
	} catch {
		throw new Error('FS operation failed');
	}
};