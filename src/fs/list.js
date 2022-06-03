import { readdir } from 'fs/promises';

export const list = async () => {
	try {
		const path = new URL('./files/', import.meta.url);
		const files = await readdir(path);
		for (const file of files) {
			console.log(file);
		}
	} catch {
		throw new Error('FS operation failed');
	}
};