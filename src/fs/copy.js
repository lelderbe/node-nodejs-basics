import fs from 'fs/promises';

export const copy = async () => {
	async function copyFolder(from, to) {
		await fs.mkdir(to);
		const files = await fs.readdir(from, { withFileTypes: true });
		for (const file of files) {
			if (file.isDirectory()) {
				await copyFolder(new URL(file.name + '/', from), new URL(file.name + '/', to));
			} else {
				fs.copyFile(new URL(file.name, from), new URL(file.name, to));
			}
		}
	}

	const from = new URL('./files/', import.meta.url);
	const to = new URL('./files_copy/', import.meta.url);

	try {
		await fs.stat(to);
		throw new Error('FS operation failed');
	} catch (err) {
		if (err.message === 'FS operation failed') {
			throw err;
		}
	}

	try {
		await fs.stat(from);
		await copyFolder(from, to);
	} catch {
		throw new Error('FS operation failed');
	}
};

// for test with "npm run fs:copy"
copy();