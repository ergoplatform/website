<script>
	// multiligual content
	import MultilingualContent from './multilingual';

	// for view
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

	// for exceptions
	const errmes = MultilingualContent.errmess;
	let loadingError = false;

	initData();

	function handleInputChange() {
		const dailyReward = 1e6 * currentBlockRewardERG * yourHashrate * blockTime / difficulty * blocksPerDay;
		dailyRevenueERG = dailyReward.toFixed(2);
		dailyRevenue = (dailyRevenueERG * currentPrice).toFixed(2);
		console.log(dailyReward, currentBlockRewardERG, yourHashrate, blockTime, difficulty, blocksPerDay)
	}

	function initData() {
		fetch(`https://api.coingecko.com/api/v3/simple/price?ids=ergo&vs_currencies=USD`)
		.then(response => {
			if (response.ok) {
				return response;
			}
			else {
				throw new Error();
			}
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
					throw new Error();
				}
			})
			.then(response => response.json())
			.then(data => {
				difficulty = data.items[0].difficulty;
				networkHashrate = (difficulty / blockTime / 1e12).toFixed(2);
			})
			.then(() => {
				yourHashrateInput.focus();
				yourHashrate = yourHashrateInput.value;
				handleInputChange();
			})
			.catch(() => {
				loadingError = true;
			});
		})
		.catch(() => {
			loadingError = true;
		});
	}
</script>

<div class="calc-container">
	{#if loadingError}
		{errmes}
	{:else}
		<div class="calc-leftside">
			<div class="calc-leftside_header">{MultilingualContent.yourHashrateTitle}</div>
			<div class="calc-leftside_main">
				<div class="calc-leftside_input-wrapper" class:active={isActive}>
					<input
						bind:this={yourHashrateInput}
						type="number"
						placeholder={MultilingualContent.hashratePlaceholderTitle}
						bind:value={yourHashrate}
						on:input={handleInputChange}
						on:focus={() => isActive = true}
						on:blur={() => isActive = false}
					/>
				</div>
				<div>MH/s</div>
			</div>
		</div>

		<div class="calc-rightside">

			<div class="calc-rightside_header">{MultilingualContent.dailyRevenueTitle}</div>

			<div class="calc-rightside_main">
				<div>{dailyRevenueERG} ERG</div>
				<div>= <span class="accented-text">${dailyRevenue}</span></div>
			</div>

			<div class="calc-rightside_parameters">

				<div class="calc-rightside_parameter">
					<div class="calc-rightside_parameter_title">{MultilingualContent.currentPriceTitle}</div>
					<div class="calc-rightside_parameter_value">
						1 ERG = <span class="accented-text">${currentPrice}</span>
					</div>
				</div>

				<div class="calc-rightside_parameter">
					<div class="calc-rightside_parameter_title">{MultilingualContent.currentBlockRewardTitle}</div>
					<div class="calc-rightside_parameter_value">
						{currentBlockRewardERG} ERG = <span class="accented-text">${currentBlockReward}</span>
					</div>
				</div>

				<div class="calc-rightside_parameter">
					<div class="calc-rightside_parameter_title">{MultilingualContent.networkHashrateTitle}</div>
					<div class="calc-rightside_parameter_value">{networkHashrate} TH/s</div>
				</div>
			</div>
		</div>
	{/if}
</div>