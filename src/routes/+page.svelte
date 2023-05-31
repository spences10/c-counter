<script lang="ts">
	import CryptoCard from '$lib/components/crypto-card.svelte'
	import '../app.css'

	export let data
</script>

<svelte:head>
	<title>C-Counter</title>
</svelte:head>

<header class="header-wrapper">
	<div class="content-wrapper">
		<p class="header-content">C-Counter</p>
	</div>
</header>
<main class="main-wrapper">
	{#each data.currencies as currency}
		<div class="card-wrapper">
			<CryptoCard {currency} />
		</div>
	{/each}
</main>

<style>
	.header-wrapper {
		margin-bottom: 4rem;
		padding: 1rem 0;
		background: rebeccapurple;
	}
	.content-wrapper {
		justify-content: center;
		margin: 0 auto;
		max-width: 960px;
	}
	.header-content {
		color: white;
		font-size: 2.5rem;
		padding-left: 20px;
		margin: 0;
	}
	.main-wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		margin: 0 auto;
		max-width: 960px;
	}
	.card-wrapper {
		display: flex;
		flex-direction: column;
		flex: 1 0 230px;
		max-width: 300px;
	}
</style>
