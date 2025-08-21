<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import {
		getCurrencies,
		getMarketStats,
		refreshData,
	} from '$lib/crypto-data.remote';
	import {
		ChartIcon,
		InfoIcon,
		SettingsIcon,
		WalletIcon,
	} from '$lib/icons';
	import { format_currency } from '$lib/utils';

	// Using await expressions directly in the component
	let refreshing = $state(false);

	async function handle_refresh() {
		refreshing = true;
		try {
			await refreshData();
			refreshing = false;
		} catch (error) {
			console.error('Failed to refresh:', error);
			refreshing = false;
		}
	}
</script>

<svelte:head>
	<title>C-Counter - Cryptocurrency Tracker</title>
</svelte:head>

<svelte:boundary>
	<!-- Hero Section -->
	<div
		class="hero min-h-[40vh] bg-gradient-to-br from-primary to-secondary"
	>
		<div class="hero-content text-center text-primary-content">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">C-Counter</h1>
				<p class="mb-5 text-xl opacity-90">
					Track cryptocurrency prices and market trends in real-time
				</p>
				<div class="flex flex-wrap justify-center gap-2">
					<button
						class="btn btn-sm btn-accent"
						class:loading={refreshing}
						onclick={handle_refresh}
						disabled={refreshing}
					>
						{#if refreshing}
							<span class="loading loading-xs loading-spinner"></span>
						{/if}
						{refreshing ? 'Refreshing...' : 'Refresh Data'}
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Market Stats Section -->
	<div class="bg-base-200 py-8">
		<div class="container mx-auto px-4">
			<h2 class="mb-6 text-center text-3xl font-bold">
				Global Market Stats
			</h2>
			{#await getMarketStats()}
				<div class="flex justify-center">
					<span
						class="loading loading-lg loading-spinner text-primary"
					></span>
				</div>
			{:then stats}
				<div
					class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
				>
					<div
						class="stat rounded-2xl bg-base-100 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
					>
						<div class="stat-figure text-primary">
							<InfoIcon
								class_names="inline-block h-8 w-8 stroke-current"
								width="32px"
								height="32px"
							/>
						</div>
						<div class="stat-title text-sm font-medium">
							Total Market Cap
						</div>
						<div class="stat-value text-xl text-primary">
							{format_currency(stats.total_mcap)}
						</div>
					</div>

					<div
						class="stat rounded-2xl bg-base-100 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
					>
						<div class="stat-figure text-secondary">
							<SettingsIcon
								class_names="inline-block h-8 w-8 stroke-current"
								width="32px"
								height="32px"
							/>
						</div>
						<div class="stat-title text-sm font-medium">
							24h Volume
						</div>
						<div class="stat-value text-xl text-secondary">
							{format_currency(stats.total_volume)}
						</div>
					</div>

					<div
						class="stat rounded-2xl bg-base-100 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
					>
						<div class="stat-figure text-accent">
							<WalletIcon
								class_names="inline-block h-8 w-8 stroke-current"
								width="32px"
								height="32px"
							/>
						</div>
						<div class="stat-title text-sm font-medium">
							Bitcoin Dominance
						</div>
						<div class="stat-value text-xl text-accent">
							{stats.btc_d}%
						</div>
					</div>

					<div
						class="stat rounded-2xl bg-base-100 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
					>
						<div class="stat-figure text-info">
							<ChartIcon
								class_names="inline-block h-8 w-8 stroke-current"
								width="32px"
								height="32px"
							/>
						</div>
						<div class="stat-title text-sm font-medium">
							Active Cryptocurrencies
						</div>
						<div class="stat-value text-xl text-info">
							{stats.active_cryptocurrencies}
						</div>
					</div>
				</div>
			{:catch error}
				<div class="alert alert-error shadow-lg">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 shrink-0 stroke-current"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<span>Failed to load market stats: {error.message}</span>
				</div>
			{/await}
		</div>
	</div>

	<!-- Cryptocurrencies Grid -->
	<div class="container mx-auto px-4 py-8">
		<div
			class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
		>
			{#each await getCurrencies() as currency}
				<Card {currency} />
			{/each}
		</div>
	</div>

	{#snippet pending()}
		<div class="hero min-h-screen bg-base-200">
			<div class="hero-content text-center">
				<div class="max-w-md">
					<span
						class="loading loading-lg loading-spinner text-primary"
					></span>
					<h1 class="mt-4 text-3xl font-bold">
						Loading Cryptocurrencies...
					</h1>
					<p class="py-6">Fetching the latest market data for you</p>
				</div>
			</div>
		</div>
	{/snippet}
</svelte:boundary>
