const router = require('express').Router()
const policy_check = require('../middlewares/policy')
const order = require('../controller/order')

router.get('/orders',
    policy_check('view', 'Order'),
    order.index
)

router.post('/orders',
    policy_check('create', 'Order'),
    order.store
)

module.exports = router