import { Transform } from 'stream';
import { EOL } from 'os';

export const transform = async () => {
	const reverseStream = new Transform({
		transform (chunk, encoding, callback) {
			try {
				const reversedData = chunk.toString().trim().split('').reverse().join('') + EOL;
				callback(null, reversedData);
			} catch (err) {
				callback(err);
			}
        }
	})

	const inputStream = process.stdin;
	const outputStream = process.stdout;

	inputStream.pipe(reverseStream).pipe(outputStream);
};