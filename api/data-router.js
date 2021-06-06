const router = require('express').Router();
const axios = require('axios').default;

// route to whale-alert.io
router.get('/:currency/:minTransactionVal', async (req, res) => {
  let { currency, minTransactionVal } = req.params;
  if (currency === 'all') currency = '';
  try {
    await axios
      .get(
        `https://api.whale-alert.io/v1/transactions?api_key=${process.env.API_KEY}&currency=${currency}&min_value=${minTransactionVal}`
      )
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((err) => {
        res.status(400).json({ errMessage: err.message });
      });
  } catch (err) {
    res.status(500).json({ errMessage: err.message });
  }
});

module.exports = router;
