import { writeFile } from 'fs/promises';

export const create = async () => {
	try	{
		const newFile = new URL('./files/fresh.txt', import.meta.url);
		await writeFile(newFile, 'I am fresh and young', { flag: 'wx', encoding: 'utf8' });
	} catch {
		throw new Error('FS operation failed');
	}
};