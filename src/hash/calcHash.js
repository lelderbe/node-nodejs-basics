import { createReadStream } from 'fs';
const { createHash } = await import('crypto');

export const calculateHash = async () => {
	const hash = createHash('sha256');

	const input = createReadStream(new URL('./files/fileToCalculateHashFor.txt', import.meta.url));
	input.pipe(hash).setEncoding('hex').pipe(process.stdout);
};