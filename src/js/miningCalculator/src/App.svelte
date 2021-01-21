<script>
	let message = 'loading...';
	let currentPrice = null;
	let currentBlockRewardERG = 67.5;
	let currentBlockReward = null;
	let networkHashrate = null;
	let dailyRevenueERG = null;
	let dailyRevenue = null;

	const blockTime = 120;
	const blocksPerDay = 864e2 / blockTime;
	const yourHashrateInput = document.getElementById("your-hashrate");

	function changedYourHashrate() {
		const yourHashrate = +yourHashrateInput.value * 1e6;
		dailyReward = currentBlockRewardERG * yourHashrate * blockTime / difficulty * blocksPerDay;
		dailyRevenueERG = dailyReward.toFixed(2);
		dailyRevenue = (dailyReward * currentPrice).toFixed(2);
	}

	fetch(`https://api.coingecko.com/api/v3/simple/price?ids=ergo&vs_currencies=USD`)
	.then(response => {
		if (response.ok) {
			return response;
		}
		else {
			const error = new Error('Error ' + response.status + ': ' + response.statusText);
			throw error;
		}
	}, error => {
		return new Error('Error: ' + error.message);
	})
	.then(response => response.json())
	.then(response => {
		currentPrice = response.ergo.usd.toFixed(2);
		currentBlockReward = (currentBlockRewardERG * currentPrice).toFixed(2);

		fetch(`https://api.ergoplatform.com/blocks?sortBy=height&sortDirection=desc&limit=1`)
		.then(response => {
			if (response.ok) {
				return response;
			}
			else {
				const error = new Error('Error ' + response.status + ': ' + response.statusText);
				throw error;
			}
		}, error => {
			return new Error('Error: ' + error.message);
		})
		.then(response => response.json())
		.then(response => {
			const difficulty = response.items[0].difficulty;
			networkHashrate = (difficulty / blockTime / 1e12).toFixed(2);
			changedYourHashrate();
		})
		.catch(error => {
			message = error.message;
		});
	})
	.catch(error => {
		message = error.message;
	});
</script>

<style>
</style>

<div>
	<h1>Ergo Mining Calculator</h1>
	<div>
		<div>
			Current price: 
			{#if currentPrice} 
				1 ERG = ${currentPrice}
			{:else} 
				{message}
			{/if}
		</div>

		<div>
			Current block reward: 
			{#if currentBlockRewardERG && currentBlockReward} 
				{currentBlockRewardERG} ERG = {currentBlockReward}
			{:else} 
				{message}
			{/if}
		</div>

		<div>
			Network hashrate: 
			{#if networkHashrate} 
				{networkHashrate} TH/s
			{:else}
				{message}
			{/if}
		</div>

		<div>
			<span>Your hashrate: </span>
			<input type="number" value="0" on:change={changedYourHashrate}/>
			<span>MH/s</span>
		</div>

		<div>
			Daily revenue:
			{#if dailyRevenueERG && dailyRevenue} 
				{dailyRevenueERG} ERG = ${dailyRevenue}
			{:else}
				{message}
			{/if}
		</div>
	</div>
</div>