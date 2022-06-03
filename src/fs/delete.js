import { rm } from 'fs/promises';

export const remove = async () => {
	try	{
		const filename = new URL('./files/fileToRemove.txt', import.meta.url);
		await rm(filename);
	} catch {
		throw new Error('FS operation failed');
	}
};