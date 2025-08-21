import { command, query } from '$app/server';
import * as v from 'valibot';

// Type definitions
export interface Currency {
	id: string;
	symbol: string;
	name: string;
	price_usd: string;
	percent_change_1h: string;
	percent_change_24h: string;
	percent_change_7d: string;
	market_cap_usd: string;
	volume24: string;
	rank: number;
}

// Get all cryptocurrencies
export const getCurrencies = query(async () => {
	const response = await fetch(
		'https://api.coinlore.com/api/tickers/',
	);
	const result = await response.json();
	return result.data as Currency[];
});

// Get a specific cryptocurrency by ID
export const getCurrency = query(v.string(), async (id: string) => {
	const response = await fetch(
		`https://api.coinlore.com/api/ticker/?id=${id}`,
	);
	const result = await response.json();
	return result[0] as Currency;
});

// Get top cryptocurrencies with limit
export const getTopCurrencies = query(
	v.number(),
	async (limit: number) => {
		const response = await fetch(
			`https://api.coinlore.com/api/tickers/?start=0&limit=${limit}`,
		);
		const result = await response.json();
		return result.data as Currency[];
	},
);

// Refresh data command (for manual refresh)
export const refreshData = command(async () => {
	// Refresh the currencies query
	await getCurrencies().refresh();
	return { success: true, timestamp: new Date().toISOString() };
});

// Get market stats
export const getMarketStats = query(async () => {
	const response = await fetch(
		'https://api.coinlore.com/api/global/',
	);
	const result = await response.json();
	return result[0];
});
