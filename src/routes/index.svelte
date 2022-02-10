<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch('https://api.coinlore.com/api/tickers/')
    const { data } = await res.json()
    return {
      props: {
        currencies: data,
      },
    }
  }
</script>

<script>
  import CryptoCard from '$lib/components/crypto-card.svelte'

  export let currencies
</script>

<main class="main-wrapper">
  {#each currencies as currency}
    <CryptoCard {currency} />
  {/each}
</main>

<style>
  .main-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 1200px;
  }
</style>
