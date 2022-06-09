import axios from 'axios';
import config from '../config.js';
import merge from 'lodash.merge';

export default class CaptchaSolver {
	constructor(clientKey) {
		this.clientKey = clientKey;
	}

	async getCaptchaTaskId() {
		const url = 'https://api.anti-captcha.com/createTask';

		const data = {
			method: 'POST',
			data: {
				clientKey: this.clientKey,
				task: config.captchaOptions.V3,
			},
		};

		const res = await this.request(url, data).then((r) => r.data);
		// console.log(res);
		return res.taskId;
	}

	async getTaskResult(taskId) {
		const url = 'https://api.anti-captcha.com/getTaskResult';

		const requestOptions = {
			method: 'POST',
			data: {
				clientKey: this.clientKey,
				taskId,
			},
		};

		return new Promise((resolve) => {
			const resultChecker = setInterval(async () => {
				const res = await this.request(url, requestOptions).then((r) => r.data);

				if (res.status !== 'processing') {
					clearInterval(resultChecker);
					resolve(res.solution);
				}
			}, 500);
		});
	}

	async request(url, options) {
		let defaultOptions = {
			headers: config.headers.captcha,
		};

		if (options) defaultOptions = merge(defaultOptions, options);

		return axios(url, defaultOptions);
	}
}
