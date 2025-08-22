import { query } from '$app/server';
import * as v from 'valibot';

// Type definitions
export interface Currency {
	id: string;
	symbol: string;
	name: string;
	nameid: string;
	rank: number;
	price_usd: string;
	percent_change_24h: string;
	percent_change_1h: string;
	percent_change_7d: string;
	price_btc: string;
	market_cap_usd: string;
	volume24: number;
	volume24a: number;
	csupply: string;
	tsupply: string;
	msupply: string;
}

// Get all cryptocurrencies
export const get_currencies = query(async () => {
	const response = await fetch(
		'https://api.coinlore.com/api/tickers/',
	);
	const result = await response.json();
	return result.data as Currency[];
});

// Get a specific cryptocurrency by ID
export const get_currency = query(v.string(), async (id: string) => {
	const response = await fetch(
		`https://api.coinlore.com/api/ticker/?id=${id}`,
	);
	const result = await response.json();
	return result[0] as Currency;
});

// Get top cryptocurrencies with limit
export const get_top_currencies = query(
	v.number(),
	async (limit: number) => {
		const response = await fetch(
			`https://api.coinlore.com/api/tickers/?start=0&limit=${limit}`,
		);
		const result = await response.json();
		return result.data as Currency[];
	},
);

// Search cryptocurrencies by name or symbol
export const search_currencies = query(
	v.string(),
	async (search_term: string) => {
		const response = await fetch(
			'https://api.coinlore.com/api/tickers/',
		);
		const result = await response.json();
		const currencies = result.data as Currency[];

		if (!search_term.trim()) {
			return currencies; // Return all if no search term
		}

		const term = search_term.toLowerCase().trim();

		// More precise filtering - prioritize exact matches and beginning matches
		const filtered = currencies
			.filter((currency) => {
				const name = currency.name.toLowerCase();
				const symbol = currency.symbol.toLowerCase();
				const nameid = currency.nameid.toLowerCase();

				// Exact matches first
				if (symbol === term || name === term || nameid === term) {
					return true;
				}

				// Symbol starts with search term (e.g., "BTC" for "B")
				if (symbol.startsWith(term)) {
					return true;
				}

				// Name starts with search term (e.g., "Bitcoin" for "Bit")
				if (name.startsWith(term)) {
					return true;
				}

				// Only then check if search term is contained within
				// But only if search term is at least 3 characters to avoid too broad matches
				if (term.length >= 3) {
					return (
						name.includes(term) ||
						symbol.includes(term) ||
						nameid.includes(term)
					);
				}

				return false;
			})
			.sort((a, b) => {
				// Sort by relevance: exact symbol match, then exact name match, then rank
				const aSymbol = a.symbol.toLowerCase();
				const bSymbol = b.symbol.toLowerCase();
				const aName = a.name.toLowerCase();
				const bName = b.name.toLowerCase();

				if (aSymbol === term) return -1;
				if (bSymbol === term) return 1;
				if (aName === term) return -1;
				if (bName === term) return 1;

				// Then by rank (lower rank = higher priority)
				return a.rank - b.rank;
			});

		return filtered;
	},
);

// Get market stats
export const get_market_stats = query(async () => {
	const response = await fetch(
		'https://api.coinlore.com/api/global/',
	);
	const result = await response.json();
	return result[0];
});
