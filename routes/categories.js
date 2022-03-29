const router = require('express').Router()
const policy_check = require('../middlewares/policy')
const category = require('../controller/category')


router.get('/categories', category.index)
router.post('/categories',
	policy_check('create', 'Category'), 
	category.store
)
router.put('/categories/:id',
	policy_check('update', 'Category'),
	category.update
)
router.delete('/categories/:id',
	policy_check('delete', 'Category'),
	category.destroy
)

module.exports = router