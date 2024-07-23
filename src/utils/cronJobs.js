const cron = require('node-cron');
const CoinGeckoClient = require('./coingeckoClient');
const Price = require('../models/Price');

// Fetch and store prices every 5 seconds
cron.schedule('*/5 * * * * *', async () => {
  let data = await CoinGeckoClient.exchanges.fetchTickers('bitfinex', {
    coin_ids: ['bitcoin', 'ethereum', 'ripple', 'litecoin', 'stellar']
  });

  const datacc = data.data.tickers.filter(t => t.target == 'USD');
  [
    'BTC',
    'ETH',
    'XRP',
    'LTC',
    'XLM'
  ].forEach(async (i) => {
    const temp = datacc.filter(t => t.base == i);
    const res = temp.length == 0 ? [] : temp[0];
    const newPrice = new Price({ symbol: i, price: res.last });
    await newPrice.save();
  });
});
