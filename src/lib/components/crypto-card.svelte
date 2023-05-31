<script>
	export let currency

	let {
		symbol,
		name,
		price_usd,
		percent_change_1h,
		percent_change_24h,
		percent_change_7d,
	} = currency

	let priceInteger = price_usd.split(`.`)[0]
	let priceFractional = price_usd.split(`.`)[1]
</script>

<section class="card-wrapper">
	<div class="title">
		<p class="name">{name}</p>
		<p>({symbol})</p>
	</div>
	<p class="price">
		<span class="currency">$</span><span class="price-integer">
			{priceInteger}
		</span>
		<span class="price-fractional">
			.{priceFractional}
		</span>
	</p>
	<div class="percentage-change">
		<div class="percentage-title">
			<p>Percent Change:</p>
		</div>
		<div class="precentage-amounts">
			<p>1hr {percent_change_1h}</p>
			<p>24hr {percent_change_24h}</p>
			<p>7d {percent_change_7d}</p>
		</div>
	</div>
</section>

<style>
	.card-wrapper {
		margin-bottom: 20px;
		border: 1px solid rebeccapurple;
		border-radius: 15px;
		padding: 20px;
	}
	.card-wrapper:hover {
		transition: all 0.3s ease 0s;
		box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px;
	}
	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}
	.name {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0;
	}
	.price {
		display: flex;
		font-size: 1.5rem;
		font-weight: 700;
		font-variant-numeric: tabular-nums;
		margin: 0;
	}
	.currency {
		font-size: 1rem;
	}
	.price-integer {
		font-size: 2rem;
	}
	.price-fractional {
		font-size: 1rem;
	}
	.percentage-change {
		display: flex;
	}
	.percentage-title {
		font-weight: 600;
		width: 50%;
	}
	.precentage-amounts {
		width: 50%;
	}
</style>
