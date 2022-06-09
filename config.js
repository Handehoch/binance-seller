const config = {
	headers: {
		binance: {
			accept: '*/*',
			clienttype: 'web',
			'content-type': 'application/json',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
			csrftoken: '9fbbeffdfa71e04c9678b474c1c79e00',
			cookie: 'cid=PLh3UyWX; bnc-uuid=30cbbd44-6ff7-43e9-9704-165039557b65; campaign=www.binance.com; source=referral; userPreferredCurrency=USD_USD; fiat-prefer-currency=RUB; nft-init-compliance=true; BNC_FV_KEY=329de3fbd2aeae0998cd3fca9d704ae081162c94; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22174740442%22%2C%22first_id%22%3A%2217da40cf3cca53-0708c29c5c6c98-978153c-1327104-17da40cf3cd9a6%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%2217da40cf3cca53-0708c29c5c6c98-978153c-1327104-17da40cf3cd9a6%22%7D; se_sd=PFQBVQJDwMhRUARDAcQFZHQYOgLEgZVkDCAW1tQXKV1JQdQVl5RNbU1C; FA5540=1; theme=dark; home-ui-ab=A; BNC_FV_KEY_EXPIRE=1646657167755; se_gd=gAWEwTlEFHWUAUQMLFxEgZZUlVhdVBUVVIAdfVUJldRVAF1NXVcA1; gtId=af0c7ed6-d623-4b83-b467-0f184bcae3d8; se_gsd=fy4lLCdmLDU0DSclJxM3BSIyDgoYAwpbVlpDVFRVV1dXHVNS1; s9r1=DFE64F14E82890C53F92EDBA20137829; lang=ru; cr00=67E11176E69ED7A4E367EED0CB3E9662; d1og=web.174740442.8A13076E1FC4B8AC9D4431E4FC691ECB; r2o1=web.174740442.B7BB6D76055885714312285908619C7B; f30l=web.174740442.6E2A98E2B5AD43E49F9B29C072085253; logined=y; __BINANCE_USER_DEVICE_ID__={\"4f29683c53289c625d2c5c5cd7f15505\":{\"date\":1646570806264,\"value\":\"1646570806618luQnW7gXWlGP3Zl1kTb\"}}; p20t=web.174740442.B722ADA55C2BDACA6A0A50BC01F97FB3; OptanonConsent=isGpcEnabled=1&datestamp=Sun+Mar+06+2022+17%3A47%3A13+GMT%2B0500+(Yekaterinburg+Standard+Time)&version=6.28.0&isIABGlobal=false&hosts=&consentId=f78c9b29-3ed0-4c9b-bf83-6135884304e9&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0004%3A0%2CC0002%3A1&AwaitingReconsent=false',
		},
		captcha: {
			accept: '*/*',
			clienttype: 'web',
			'content-type': 'application/json',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
		},
	},
	captchaOptions: {
		V2: {
			type: 'RecaptchaV2TaskProxyless',
			websiteURL: 'https://www.binance.com',
			websiteKey: '6LeUPckbAAAAAIX0YxfqgiXvD3EOXSeuq0OpO8u_',
			isInvisible: true,
		},
		V3: {
			type: 'RecaptchaV3TaskProxyless',
			websiteURL: 'https://www.binance.com',
			websiteKey: '6LeUPckbAAAAAIX0YxfqgiXvD3EOXSeuq0OpO8u_',
			minScore: '0.7',
			pageAction: 'submit',
		},
	},
	proxy: 'socks://BTQMRFC3:KfJn4jSe@176.103.80.235:56515',
	captchaKey: '64b8d2e72fb98eca1791c32630969d42',
};

export default config;

// export const binanceHeaders = {
// 	accept: "*/*",
// 	clienttype: "web",
// 	"content-type": "application/json",
// 	"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
// 	csrftoken: "e78b15875bfa97deff86fdb3f18a1e40",
// 	cookie: "cid=PLh3UyWX; bnc-uuid=30cbbd44-6ff7-43e9-9704-165039557b65; source=referral; campaign=www.binance.com; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2217da40cf3cca53-0708c29c5c6c98-978153c-1327104-17da40cf3cd9a6%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%7D%2C%22%24device_id%22%3A%2217da40cf3cca53-0708c29c5c6c98-978153c-1327104-17da40cf3cd9a6%22%7D; home-ui-ab=B; userPreferredCurrency=USD_USD; fiat-prefer-currency=RUB; theme=light; nft-init-compliance=true; BNC_FV_KEY=329de3fbd2aeae0998cd3fca9d704ae081162c94; BNC_FV_KEY_EXPIRE=1644833697338; gtId=901de067-5c9b-4638-83c9-61c3e3c591de; s9r1=AC09EFEF375F6CFBF030AB8CFFDE851B; lang=ru; cr00=A63C6E88212CF8AC82B367C6E513BEF6; d1og=web.174740442.1E2A627FD60E39FFCB5C55A4D9C8CDA2; r2o1=web.174740442.73699BBA1E7F0B477B650A237FF67D1A; f30l=web.174740442.94C15921B29C9A2377398960EEF9FB23; logined=y; isAccountsLoggedIn=y; __BINANCE_USER_DEVICE_ID__={\"4f29683c53289c625d2c5c5cd7f15505\":{\"date\":1644747345269,\"value\":\"16447473454539U3EvHBR2VJcqgAaG09\"}}; p20t=web.174740442.102D15974D4F0116654ED107BB9DFED5; OptanonConsent=isGpcEnabled=1&datestamp=Sun+Feb+13+2022+15%3A16%3A55+GMT%2B0500+(Yekaterinburg+Standard+Time)&version=6.28.0&isIABGlobal=false&hosts=&consentId=f78c9b29-3ed0-4c9b-bf83-6135884304e9&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0004%3A0%2CC0002%3A1&AwaitingReconsent=false"
// };
//
// export const captchaHeaders = {
// 	accept: "*/*",
// 	clienttype: "web",
// 	"content-type": "application/json",
// 	"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
// };
//
// //V3 config
// export const captchaV3Options = {
// 	type: "RecaptchaV3TaskProxyless",
// 	websiteURL: "https://www.binance.com",
// 	websiteKey: "6LeUPckbAAAAAIX0YxfqgiXvD3EOXSeuq0OpO8u_",
// 	minScore: "0.7",
// 	pageAction: "submit"
// };
//
// //V2 config
// export const captchaV2Options = {
// 	type: "RecaptchaV2TaskProxyless",
// 	websiteURL: "https://www.binance.com",
// 	websiteKey: "6LeUPckbAAAAAIX0YxfqgiXvD3EOXSeuq0OpO8u_",
// 	isInvisible: true,
// };
//
// export const proxy = 'socks://BTQMRFC3:KfJn4jSe@176.103.80.235:56515';
//
// export const captchaKey = '64b8d2e72fb98eca1791c32630969d42';
