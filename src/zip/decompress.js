import { open } from 'fs/promises';
import { pipeline } from 'stream/promises';
import { createGunzip } from 'zlib';

export const decompress = async () => {
	try {
		const source = await open(new URL('./files/archive.gz', import.meta.url), 'r');
		const destination = await open(new URL('./files/fileToCompress.txt', import.meta.url), 'w');

		const readStream = source.createReadStream();
		const writeStream = destination.createWriteStream();
		const gunzip = createGunzip();

		await pipeline(readStream, gunzip, writeStream);
	} catch (err) {
		console.error('An error occurred:', err);
		process.exitCode = 1;
	}
};

// for test with "npm run zip:decompress"
decompress();