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
  import '../../static/fonts/satoshi.css'

  export let currencies
</script>

<main class="main-wrapper">
  {#each currencies as currency}
    <div class="card-wrapper">
      <CryptoCard {currency} />
    </div>
  {/each}
</main>

<style>
  .main-wrapper {
    font-family: Satoshi-Regular;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin: 0 auto;
    max-width: 960px;
    padding: 0px 1.0875rem 1.45rem;
    padding-top: 0;
  }
  .card-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1 0 230px;
    max-width: 300px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
</style>
