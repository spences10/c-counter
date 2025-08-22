<script lang="ts">
	import type { Currency } from '$lib/crypto-data.remote';
	import { get_currency } from '$lib/crypto-data.remote';
	import { Chart, Refresh, TrendDown, TrendUp } from '$lib/icons';
	import { number_crunch } from '$lib/utils';

	interface Props {
		currency: Currency;
	}

	let { currency }: Props = $props();

	// Modal state
	let show_modal = $state(false);

	let {
		symbol,
		name,
		price_usd,
		percent_change_1h,
		percent_change_24h,
		percent_change_7d,
	} = currency;

	// Function to get color class based on percentage change
	function get_change_color(change: string) {
		const value = parseFloat(change);
		if (value > 0) return 'text-success';
		if (value < 0) return 'text-error';
		return 'text-base-content';
	}

	function get_change_badge_color(change: string) {
		const value = parseFloat(change);
		if (value > 0) return 'badge-success';
		if (value < 0) return 'badge-error';
		return 'badge-neutral';
	}

	function get_change_icon_component(change: string) {
		const value = parseFloat(change);
		if (value > 0) return TrendUp;
		if (value < 0) return TrendDown;
		return null;
	}

	function refresh_currency() {
		// Simply call refresh() - it immediately updates the cached query
		get_currency(currency.id).refresh();
	}
</script>

{#snippet change_display(change: string)}
	{@const IconComponent = get_change_icon_component(change)}
	{#if IconComponent}
		<IconComponent
			class_names="inline h-4 w-4"
			width="16px"
			height="16px"
		/>
	{:else}
		➡️
	{/if}
	{change}%
{/snippet}

<div
	class="card overflow-hidden border border-base-300 bg-base-100 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
>
	<!-- Card Header with Gradient -->
	<div class="bg-gradient-to-r from-primary to-secondary p-4">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-3">
				<div>
					<h2 class="text-lg leading-tight font-bold text-white">
						{name}
					</h2>
					<div class="badge badge-sm badge-accent">{symbol}</div>
				</div>
			</div>
			<div class="text-right">
				<div class="text-xs text-white/80">Current Price</div>
				<div class="text-xl font-bold text-white">
					${number_crunch(price_usd)}
				</div>
			</div>
		</div>
	</div>

	<div class="card-body p-6">
		<!-- Price Changes Grid -->
		<div class="mb-4 grid grid-cols-3 gap-3">
			<div class="stat rounded-lg bg-base-200 p-3">
				<div class="stat-title text-xs">1 Hour</div>
				<div
					class="stat-value text-sm {get_change_color(
						percent_change_1h,
					)}"
				>
					{@render change_display(percent_change_1h)}
				</div>
			</div>

			<div class="stat rounded-lg bg-base-200 p-3">
				<div class="stat-title text-xs">24 Hours</div>
				<div
					class="stat-value text-sm {get_change_color(
						percent_change_24h,
					)}"
				>
					{@render change_display(percent_change_24h)}
				</div>
			</div>

			<div class="stat rounded-lg bg-base-200 p-3">
				<div class="stat-title text-xs">7 Days</div>
				<div
					class="stat-value text-sm {get_change_color(
						percent_change_7d,
					)}"
				>
					{@render change_display(percent_change_7d)}
				</div>
			</div>
		</div>

		<!-- Performance Indicator -->
		<div class="mb-4">
			<div class="mb-2 flex items-center justify-between">
				<span class="text-sm font-medium">24h Performance</span>
				<div
					class="badge {get_change_badge_color(
						percent_change_24h,
					)} badge-sm"
				>
					{parseFloat(percent_change_24h) >= 0
						? 'Bullish'
						: 'Bearish'}
				</div>
			</div>
			<progress
				class="progress {parseFloat(percent_change_24h) >= 0
					? 'progress-success'
					: 'progress-error'} h-3 w-full"
				value={Math.abs(parseFloat(percent_change_24h))}
				max="15"
			></progress>
		</div>

		<!-- Action Button -->
		<div class="flex justify-center">
			<button
				class="btn w-full btn-sm btn-primary"
				onclick={() => (show_modal = true)}
			>
				<Chart class_names="h-4 w-4" width="16px" height="16px" />
				View Details
			</button>
		</div>
	</div>
</div>

<!-- Modal -->
{#if show_modal}
	<div class="modal-open modal">
		<div class="modal-box">
			<div class="mb-4 flex items-center justify-between">
				<h3 class="text-lg font-bold">{name} ({symbol}) Details</h3>
				<button
					class="btn btn-circle btn-ghost btn-sm"
					onclick={() => (show_modal = false)}
				>
					✕
				</button>
			</div>

			<div class="mb-4">
				<div class="stat rounded-lg bg-base-200 p-4">
					<div class="stat-title">Current Price</div>
					<div class="stat-value text-primary">
						${number_crunch(price_usd)}
					</div>
				</div>
			</div>

			<svelte:boundary>
				{#await get_currency(currency.id)}
					<div class="flex justify-center py-8">
						<span
							class="loading loading-lg loading-spinner text-primary"
						></span>
					</div>
				{:then detailedCurrency}
					<div class="space-y-4">
						<div class="grid grid-cols-2 gap-4">
							<div class="stat rounded-lg bg-base-200 p-4">
								<div class="stat-title text-xs">Market Cap</div>
								<div class="stat-value text-sm">
									${number_crunch(
										detailedCurrency.market_cap_usd || '0',
									)}
								</div>
							</div>
							<div class="stat rounded-lg bg-base-200 p-4">
								<div class="stat-title text-xs">24h Volume</div>
								<div class="stat-value text-sm">
									${number_crunch(detailedCurrency.volume24 || '0')}
								</div>
							</div>
						</div>

						<div class="grid grid-cols-2 gap-4">
							<div class="stat rounded-lg bg-base-200 p-4">
								<div class="stat-title text-xs">Market Rank</div>
								<div class="stat-value text-sm">
									#{detailedCurrency.rank}
								</div>
							</div>
							<div class="stat rounded-lg bg-base-200 p-4">
								<div class="stat-title text-xs">Price BTC</div>
								<div class="stat-value text-sm">
									{detailedCurrency.price_btc}
								</div>
							</div>
						</div>

						<div class="grid grid-cols-3 gap-3">
							<div class="stat rounded-lg bg-base-200 p-3">
								<div class="stat-title text-xs">1h Change</div>
								<div
									class="stat-value text-sm {get_change_color(
										detailedCurrency.percent_change_1h,
									)}"
								>
									{@render change_display(
										detailedCurrency.percent_change_1h,
									)}
								</div>
							</div>
							<div class="stat rounded-lg bg-base-200 p-3">
								<div class="stat-title text-xs">24h Change</div>
								<div
									class="stat-value text-sm {get_change_color(
										detailedCurrency.percent_change_24h,
									)}"
								>
									{@render change_display(
										detailedCurrency.percent_change_24h,
									)}
								</div>
							</div>
							<div class="stat rounded-lg bg-base-200 p-3">
								<div class="stat-title text-xs">7d Change</div>
								<div
									class="stat-value text-sm {get_change_color(
										detailedCurrency.percent_change_7d,
									)}"
								>
									{@render change_display(
										detailedCurrency.percent_change_7d,
									)}
								</div>
							</div>
						</div>
					</div>
				{:catch error}
					<div class="alert alert-error">
						<span
							>Failed to load detailed information: {error.message}</span
						>
					</div>
				{/await}

				{#snippet pending()}
					<div class="flex justify-center py-8">
						<span class="loading loading-lg loading-dots"></span>
					</div>
				{/snippet}
			</svelte:boundary>

			<div class="modal-action">
				<button class="btn btn-secondary" onclick={refresh_currency}>
					<Refresh class_names="h-4 w-4" width="16px" height="16px" />
					Refresh Data
				</button>
				<button class="btn" onclick={() => (show_modal = false)}
					>Close</button
				>
			</div>
		</div>
	</div>
{/if}
