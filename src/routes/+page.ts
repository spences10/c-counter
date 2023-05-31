export const load = async ({ fetch }) => {
	const res = await fetch('https://api.coinlore.com/api/tickers/');
	const { data } = await res.json();
	return {
		currencies: data
	};
};
