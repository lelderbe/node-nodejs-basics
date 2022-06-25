import fs from 'fs/promises';

export const write = async () => {
	const fd = await fs.open(new URL('./files/fileToWrite.txt', import.meta.url), 'w');
	const outputStream = fd.createWriteStream({ encoding: 'utf-8' });
	process.stdin.pipe(outputStream);
};

// for test with "npm run streams:write"
write();