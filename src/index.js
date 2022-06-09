import getOnSaleData from '../service/payloadConfigurator.js';
import config from '../config.js';
import { Account, wait } from './account.js';
import CaptchaSolver from '../service/capthcaSolver.js';

const waitUntil = async (second) =>
	new Promise((resolve) => {
		const interval = setInterval(() => {
			const date = new Date();

			if (date.getSeconds() === second) {
				clearInterval(interval);
				resolve();
			}
		}, 100);
	});

async function generateCaptchaToken(account) {
	const solver = new CaptchaSolver(config.captchaKey);

	const taskId = await solver.getCaptchaTaskId();
	const solution = await solver.getTaskResult(taskId);

	const data = getOnSaleData(20, 124124);
	const res = await account.listItem(data, solution.gRecaptchaResponse);

	if (res.code === '10000222') {
		console.log(res);

		await wait(5000);
		return generateCaptchaToken(account);
	}

	return solution.gRecaptchaResponse;
}

async function sell(price, account, box) {
	const captchaToken = await generateCaptchaToken(account);

	await waitUntil(19);

	const data = getOnSaleData(price, box);

	const res = await account.listItem(data, captchaToken);
	console.log(`Listed at ${new Date()}`, res);

	return res;
}

(async function main() {
	try {
		const account = new Account(config.proxy);

		while (true) {
			const boxes = await account.getItemsId();
			const res = await sell(16, account, boxes[0]); //be careful with boxes index!
			boxes.pop();

			const leftTimes = await account.getLeftSellTimes(res.data.productId);
			console.log(`Left times available: ${leftTimes}`);

			await wait(5 * 60 * 1000);

			console.log('Delist info:');
			const delistRes = await account.delistItem(res.data.productId);

			if (!leftTimes || !delistRes.success) break;
		}
	} catch (e) {
		console.error(e.message);
	}
})();
