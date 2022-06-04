import * as fs from 'fs/promises';

export const write = async () => {
	const fd = await fs.open(new URL('./files/fileToWrite.txt', import.meta.url), 'a');
	const outputStream = fd.createWriteStream({ encoding: 'utf-8' });
	process.stdin.pipe(outputStream);
};