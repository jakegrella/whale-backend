const router = require('express').Router();
const axios = require('axios').default;

// route to whale-alert.io
router.get('/:currency/:minTransactionVal', async (req, res) => {
  const { currency, minTransactionVal } = req.params;
  try {
    const response = await axios.get(
      `https://api.whale-alert.io/v1/transactions?api_key=${process.env.API_KEY}&currency=${currency}&min_value=${minTransactionVal}`
    );
    console.log(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ errMessage: err.message });
  }
});

module.exports = router;
