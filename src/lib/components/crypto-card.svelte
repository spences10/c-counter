<script>
  export let currency

  let {
    symbol,
    name,
    price_usd,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d,
  } = currency
</script>

<section class="card-wrapper">
  <div class="title">
    <p class="name">{name}</p>
    <p>{symbol}</p>
  </div>
  <p class="price">${price_usd}</p>
  <div class="percentage-change">
    <p>Percent Change:</p>
    <p>1hr {percent_change_1h}</p>
    <p>24hr {percent_change_24h}</p>
    <p>7d {percent_change_7d}</p>
  </div>
</section>

<style>
  .card-wrapper {
    margin-bottom: 20px;
    border: 1px solid rebeccapurple;
    border-radius: 15px;
    padding: 20px;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .name {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
  }
  .price {
    font-size: 1.5rem;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
  }
</style>
