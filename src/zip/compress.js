import { open } from 'fs/promises';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';

export const compress = async () => {
	try {
		const source = await open(new URL('./files/fileToCompress.txt', import.meta.url), 'r');
		const destination = await open(new URL('./files/archive.gz', import.meta.url), 'w');

		const readStream = source.createReadStream();
		const writeStream = destination.createWriteStream();
		const gzip = createGzip();

		await pipeline(readStream, gzip, writeStream);
	} catch (err) {
		console.error('An error occurred:', err);
		process.exitCode = 1;
	}
};