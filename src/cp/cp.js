import { spawn } from 'child_process';
import url from 'url';

export const spawnChildProcess = async (args) => {
	const path = url.fileURLToPath(new URL('./files/script.js', import.meta.url));
	const child = spawn('node', [path, ...args]);

	child.stdout.on('data', (data) => {
		process.stdout.write(data);
	});

	child.stderr.on('data', (data) => {
		process.stderr.write(data);
	});

	child.on('close', (code) => {
		process.exit(code);
	});

	process.stdin.on('data', (data) => {
		const buffer = Buffer.from(data.toString().trim());
		child.stdin.write(buffer);
	});
};

// for test with "npm run cp"
spawnChildProcess(process.argv.slice(2));