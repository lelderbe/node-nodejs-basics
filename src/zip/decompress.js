import { open } from 'fs/promises';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream';
import { promisify } from 'util';

// via Promises API async/await
export const decompress = async () => {
	try {
		const source = await open(new URL('./files/archive.gz', import.meta.url), 'r');
		const destination = await open(new URL('./files/fileToCompress.txt', import.meta.url), 'w');

		const readStream = source.createReadStream();
		const writeStream = destination.createWriteStream();
		const gunzip = createGunzip();

		const pipe = promisify(pipeline);
		await pipe(readStream, gunzip, writeStream);
	} catch (err) {
		console.error('An error occurred:', err);
		process.exitCode = 1;
	}
};