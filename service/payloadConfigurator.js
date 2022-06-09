import moment from 'moment';


function getNearestValidDate() {
	
	return moment
		.utc()
		.add({ hours: 12, seconds: 60 })
		.format('YYYY-MM-DD HH:mm:ss');
}

function getOnSaleData(price, boxId) {
	const endTime = getNearestValidDate();

	return {
		amount: price,
		batchNum: 1,
		category: 0,
		coverUrl: "https://public.nftstatic.com/static/nft/res/7183d1d9af374a09bbc6ef28214bd375.jpeg",
		currency: "BUSD",
		feeId: 1,
		maxAmount: "",
		nftIds: [],
		nftType: 2,
		relateId: boxId,
		setEndTime: endTime,
		setStartTime: "",
		stepAmount: "0",
		stockNum: 1,
		title: "All Stars Mystery Box - Batch 3/3",
		tradeType: 0
	};
}

export default getOnSaleData;