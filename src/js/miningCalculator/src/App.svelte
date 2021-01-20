<script>
	// for view
	let message = 'loading...';
	let currentPrice = '';
	let currentBlockRewardERG = '67.5';
	let currentBlockReward = '';
	let networkHashrate = '';
	let yourHashrateInput;
	let yourHashrate = '';
	let dailyRevenueERG = '';
	let dailyRevenue = '';
	let isActive = false;

	// for calculations
	const blockTime = 120;
	const blocksPerDay = 864e2 / blockTime;
	let difficulty;

	function changedYourHashrate() {
		yourHashrate = yourHashrateInput.value;
		const dailyReward = currentBlockRewardERG * yourHashrate * 1e6 * blockTime / difficulty * blocksPerDay;
		dailyRevenueERG = dailyReward.toFixed(2);
		console.log(dailyRevenueERG);
		dailyRevenue = (dailyRevenueERG * currentPrice).toFixed(2);
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
	.then(data => {
		currentPrice = data.ergo.usd.toFixed(2);
		currentBlockReward = (currentBlockRewardERG * currentPrice).toFixed(2);

		fetch(`https://api.ergoplatform.com/blocks`)
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
		.then(data => {
			difficulty = data.items[0].difficulty;
			networkHashrate = (difficulty / blockTime / 1e12).toFixed(2);
			changedYourHashrate();
			message = 'success';
		})
		.catch(error => {
			message = error.message;
		});
	})
	.catch(error => {
		message = error.message;
	});
</script>

<div class="calc-container">
	<div class="calc-leftside">
		<div class="calc-leftside_header">Your hashrate</div>
		<div class="calc-leftside_main">
			<div class="calc-leftside_input-wrapper" class:active={isActive}>
				<input
					bind:this={yourHashrateInput}
					type="number"
					value={yourHashrate}
					placeholder="Hashrate value"
					on:change={changedYourHashrate}
					on:focus={() => isActive = true}
      				on:blur={() => isActive = false}
				/>
			</div>
			<div>MH/s</div>
		</div>
	</div>

	<div class="calc-rightside">

		<div class="calc-rightside_header">Daily revenue</div>

		<div class="calc-rightside_main">
			<div>{dailyRevenueERG} ERG</div>
			<div>= <span class="accented-text">${dailyRevenue}</span></div>
		</div>

		<div class="calc-rightside_parameters">

			<div class="calc-rightside_parameter">
				<div class="calc-rightside_parameter_title">Current price</div>
				<div class="calc-rightside_parameter_value">
					1 ERG = <span class="accented-text">${currentPrice}</span>
				</div>
			</div>

			<div class="calc-rightside_parameter">
				<div class="calc-rightside_parameter_title">Current block reward</div>
				<div class="calc-rightside_parameter_value">
					{currentBlockRewardERG} ERG = <span class="accented-text">${currentBlockReward}</span>
				</div>
			</div>

			<div class="calc-rightside_parameter">
				<div class="calc-rightside_parameter_title">Network hashrate</div>
				<div class="calc-rightside_parameter_value">{networkHashrate} TH/s</div>
			</div>
		</div>
	</div>
	
	<!-- <div>

		<div>
			<span>Your hashrate: </span>
			<input id="your-hashrate" type="number" value={yourHashrate} 
				on:change={changedYourHashrate} bind:this={yourHashrateInput}/>
			<span>MH/s</span>
		</div>

		<div>
			Daily revenue: {dailyRevenueERG} ERG = ${dailyRevenue}
		</div>

		<div>
			Loading message: {message}
		</div>
	</div> -->
</div>