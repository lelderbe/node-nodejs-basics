import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

// via Callback API
export const compress = async () => {
	const source = new URL('./files/fileToCompress.txt', import.meta.url);
	const destination = new URL('./files/archive.gz', import.meta.url)

	const readStream = createReadStream(source);
	const writeStream = createWriteStream(destination);
	const gzip = createGzip();

	pipeline(readStream, gzip, writeStream, (err) => {
		if (err) {
			console.error('An error occurred:', err);
			process.exitCode = 1;
		}
	});
};