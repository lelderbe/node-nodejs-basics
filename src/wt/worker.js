import { parentPort, workerData } from 'worker_threads';

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
	const n = parseInt(workerData);
	if (!isNaN(n)) {
		parentPort.postMessage(nthFibonacci(n));
	} else {
		emit('error');
	}
};

sendResult();