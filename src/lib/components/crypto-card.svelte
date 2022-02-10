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
    <p>{name}</p>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  }
  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  }
  .price {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  }
  .percentage-change {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  }
</style>
