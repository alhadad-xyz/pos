const router = require('express').Router()
const invoice = require('../controller/invoice')

router.get('/invoices/:order_id', invoice.index)

module.exports = router