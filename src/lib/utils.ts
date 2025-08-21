export const number_crunch = (num: number | string): string => {
	if (!num || num === '' || num === '0') return '0';

	const suffixes = ['', 'k', 'm', 'b', 't'];
	const num_value = Number(num);
	const num_absolute = Math.abs(num_value);
	const sign = Math.sign(num_value);

	if (isNaN(num_absolute)) return '0';

	const magnitude = Math.min(
		Math.floor(Math.log10(num_absolute) / 3),
		suffixes.length - 1,
	);

	// Handle numbers less than 1 differently - show them as-is with reasonable precision
	if (num_absolute < 1) {
		return `${sign < 0 ? '-' : ''}${num_absolute.toFixed(2)}`;
	}

	const abbreviation = (
		num_absolute / Math.pow(10, magnitude * 3)
	).toFixed(magnitude === 0 ? 0 : 1);
	const abbreviation_without_trailing_zero = abbreviation.endsWith(
		'.0',
	)
		? abbreviation.slice(0, -2)
		: abbreviation;

	return `${
		sign < 0 ? '-' : ''
	}${abbreviation_without_trailing_zero}${suffixes[magnitude]}`;
};

// Additional helper for formatting currency
export const format_currency = (num: number | string): string => {
	const value = Number(num);
	if (value >= 1000000) {
		return `$${number_crunch(value)}`;
	}
	return `$${value.toLocaleString()}`;
};
