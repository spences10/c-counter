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

<svelte:head>
  <title>C-Counter</title>
</svelte:head>

<header class="header-wrapper">
  <div class="content-wrapper">
    <p class="header-content">C-Counter</p>
  </div>
</header>
<main class="main-wrapper">
  {#each currencies as currency}
    <div class="card-wrapper">
      <CryptoCard {currency} />
    </div>
  {/each}
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
  .header-wrapper {
    margin: 0 auto;
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
    font-family: Satoshi-Black;
    color: white;
    font-size: 2.5rem;
    padding-left: 20px;
    margin: 0;
  }
  .main-wrapper {
    font-family: Satoshi-Regular;
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
