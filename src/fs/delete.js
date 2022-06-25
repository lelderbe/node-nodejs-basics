import { rm } from 'fs/promises';

export const remove = async () => {
	const filename = new URL('./files/fileToRemove.txt', import.meta.url);

	try	{
		await rm(filename);
	} catch {
		throw new Error('FS operation failed');
	}
};

// for test with "npm run fs:delete"
remove();