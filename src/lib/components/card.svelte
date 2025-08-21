<script lang="ts">
	import type { Currency } from '$lib/crypto-data.remote';
	import { getCurrency } from '$lib/crypto-data.remote';
	import { ChartIcon, RefreshIcon } from '$lib/icons';
	import { number_crunch } from '$lib/utils';

	interface Props {
		currency: Currency;
	}

	let { currency }: Props = $props();

	// Use await to get real-time data for this specific currency
	let show_details = $state(false);
	let refreshing = $state(false);

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

	function get_change_icon(change: string) {
		const value = parseFloat(change);
		if (value > 0) return '📈';
		if (value < 0) return '📉';
		return '➡️';
	}

	async function refresh_currency() {
		refreshing = true;
		try {
			await getCurrency(currency.id).refresh();
			refreshing = false;
		} catch (error) {
			console.error('Failed to refresh currency:', error);
			refreshing = false;
		}
	}
</script>

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
					{get_change_icon(percent_change_1h)}
					{percent_change_1h}%
				</div>
			</div>

			<div class="stat rounded-lg bg-base-200 p-3">
				<div class="stat-title text-xs">24 Hours</div>
				<div
					class="stat-value text-sm {get_change_color(
						percent_change_24h,
					)}"
				>
					{get_change_icon(percent_change_24h)}
					{percent_change_24h}%
				</div>
			</div>

			<div class="stat rounded-lg bg-base-200 p-3">
				<div class="stat-title text-xs">7 Days</div>
				<div
					class="stat-value text-sm {get_change_color(
						percent_change_7d,
					)}"
				>
					{get_change_icon(percent_change_7d)}
					{percent_change_7d}%
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

		<!-- Action Buttons -->
		<div class="mb-4 flex gap-2">
			<button
				class="btn flex-1 btn-sm btn-primary"
				onclick={() => (show_details = !show_details)}
			>
				<ChartIcon class_names="h-4 w-4" width="16px" height="16px" />
				{show_details ? 'Hide' : 'Details'}
			</button>

			<button
				class="btn btn-sm btn-secondary"
				class:loading={refreshing}
				onclick={refresh_currency}
				disabled={refreshing}
			>
				{#if !refreshing}
					<RefreshIcon
						class_names="h-4 w-4"
						width="16px"
						height="16px"
					/>
				{/if}
				Refresh
			</button>
		</div>

		<!-- Detailed Information -->
		{#if show_details}
			<div class="divider my-2"></div>
			<div class="rounded-lg bg-base-200 p-4">
				<svelte:boundary>
					{#await getCurrency(currency.id)}
						<div class="flex justify-center py-4">
							<span
								class="loading loading-sm loading-spinner text-primary"
							></span>
						</div>
					{:then detailedCurrency}
						<div class="space-y-3">
							<div class="flex items-center justify-between">
								<span class="text-sm font-medium text-base-content/70"
									>Market Cap</span
								>
								<span class="font-semibold">
									${number_crunch(
										detailedCurrency.market_cap_usd || '0',
									)}
								</span>
							</div>

							<div class="flex items-center justify-between">
								<span class="text-sm font-medium text-base-content/70"
									>24h Volume</span
								>
								<span class="font-semibold">
									${number_crunch(detailedCurrency.volume24 || '0')}
								</span>
							</div>

							<div class="flex items-center justify-between">
								<span class="text-sm font-medium text-base-content/70"
									>Market Rank</span
								>
								<div class="badge badge-primary">
									#{detailedCurrency.rank}
								</div>
							</div>
						</div>
					{:catch error}
						<div class="alert alert-error">
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
							<span class="text-sm">Failed to load details</span>
						</div>
					{/await}

					{#snippet pending()}
						<div class="flex justify-center py-4">
							<span class="loading loading-sm loading-dots"></span>
						</div>
					{/snippet}
				</svelte:boundary>
			</div>
		{/if}
	</div>
</div>
