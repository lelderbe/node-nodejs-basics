import { writeFile } from 'fs/promises';

export const create = async () => {
	const newFile = new URL('./files/fresh.txt', import.meta.url);

	try	{
		await writeFile(newFile, 'I am fresh and young', { flag: 'wx', encoding: 'utf8' });
	} catch {
		throw new Error('FS operation failed');
	}
};

// for test with "npm run fs:create"
await create();