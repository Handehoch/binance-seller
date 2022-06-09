import axios from 'axios';
import ProxyAgent from 'proxy-agent';
import merge from 'lodash.merge';
import config from '../config.js';

export class Account {
	constructor(proxy) {
		//(proxy, cookie, csrftoken)
		this.proxy = proxy;
	}

	async getItemsId() {
		const url =
			'https://www.binance.com/bapi/nft/v1/private/nft/nft-mystery/collection/total-serials';

		const options = {
			method: 'POST',
			data: {},
		};

		const res = await this.request(url, options).then((r) => r.data);
		const { mysteryBoxSerialsSimpleVo } = res.data;
		return mysteryBoxSerialsSimpleVo.map((box) => box.serialsNo);
	}

	async listItem(data, captchaToken) {
		const url =
			'https://www.binance.com/bapi/nft/v1/private/nft/nft-trade/product-onsale';

		const options = {
			method: 'POST',
			data,
			headers: {
				'x-nft-checkbot-sitekey': '6LeUPckbAAAAAIX0YxfqgiXvD3EOXSeuq0OpO8u_',
				'x-nft-checkbot-token': captchaToken,
			},
		};

		// console.log(res);
		return await this.request(url, options).then((r) => r.data);
	}

	async delistItem(productId) {
		const url =
			'https://www.binance.com/bapi/nft/v1/private/nft/nft-trade/product-offsale';

		const options = {
			method: 'POST',
			data: {
				productId,
			},
		};

		const res = await this.request(url, options).then((r) => r.data);
		console.log(res);
		return res;
	}

	async getLeftSellTimes(productId) {
		const url =
			'https://www.binance.com/bapi/nft/v1/private/nft/nft-trade/product-offsale-check';

		const options = {
			method: 'POST',
			data: {
				productId,
			},
		};

		const res = await this.request(url, options).then((r) => r.data);
		// console.log(res);
		return res.data.leftTimes;
	}

	async getOnSaleItemsAmount() {
		const url =
			'https://www.binance.com/bapi/nft/v1/private/nft/nft-mystery/on-sale/page';

		const options = {
			method: 'POST',
			data: {
				openStatus: 10,
				page: 1,
				pageSize: 12,
			},
		};

		const res = await this.request(url, options).then((r) => r.data);
		return res.data.total;
	}

	async request(url, options) {
		let defaultOptions = {
			headers: config.headers.binance,
			httpsAgent: new ProxyAgent(this.proxy),
			httpAgent: new ProxyAgent(this.proxy),
		};

		if (options) defaultOptions = merge(defaultOptions, options);

		return axios(url, defaultOptions);
	}
}

export async function wait(timeout) {
	return new Promise((resolve) => setTimeout(resolve, timeout));
}
