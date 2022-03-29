const router = require('express').Router()
const multer = require('multer')
const os = require('os')
const policy_check = require('../middlewares/policy')

const product = require('../controller/product')

// Route URL untuk mengakses data product
router.get('/products', product.index)

// Route URL untuk menambahkan product
router.post('/products', 
	multer({dest: os.tmpdir()}).single('image'), 
	policy_check('create', 'Product'),
	product.store
)

// Route URL untuk mengubah product
router.put('/products/:id', 
	multer({dest: os.tmpdir()}).single('image'),
	policy_check('update', 'Product'),
 	product.update
 )

// Route URL untuk menghapus product
router.delete('/products/:id',
	policy_check('delete', 'Product'), 
	product.destroy
)

module.exports = router