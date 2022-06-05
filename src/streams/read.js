import fs from 'fs/promises';

export const read = async () => {
	const fd = await fs.open(new URL('./files/fileToRead.txt', import.meta.url));
	const inputStream = fd.createReadStream({ encoding: 'utf-8' });
	inputStream.pipe(process.stdout);
};

// for test with "npm run streams:read"
read();