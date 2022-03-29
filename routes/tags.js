const router = require('express').Router()
const policy_check = require('../middlewares/policy')
const tag = require('../controller/tag')

router.get('/tags', tag.index)
router.post('/tags',
	policy_check('create', 'Tag'),
	tag.store
)
router.put('/tags/:id',
	policy_check('update', 'Tag'),
 	tag.update
)
router.delete('/tags/:id',
	policy_check('delete', 'Tag'),
	tag.destroy
)

module.exports = router