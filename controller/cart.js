const Product = require('../model/Product')
const CartItem = require('../model/CartItem')

const index = async (req, res, next) => {
	try {
		let items = await CartItem.find({user: req.user._id}).populate('product')
		return res.json(items)
	} catch(err) {
		if(err && err === 'ValidationError') {
			return res.json({
				error: 1,
				message: err.message,
				fields: err.errors
			})
		}

		next(err)
	}
}

const update = async (req, res, next) => {
	try {
		const {items} = req.body
		const productId = items.map(item => item.product._id)
		const products = await Product.find({_id: {$in: productId}})
		let cartItem = items.map(item => {
			let relateProduct = products.find(product => product._id.toString() === item.product._id)
			return {
				product: relateProduct._id,
				price: relateProduct.price,
				image_url: relateProduct.image_url,
				name: relateProduct.name,
				user: req.user._id,
				qty: item.qty
			}
		})

		await CartItem.deleteMany({user: req.user._id})
		await CartItem.bulkWrite(cartItem.map(item => {
			return {
				updateOne: {
					filter: {
						user: req.user._id,
						product: item.product
					},
					update: item,
					upsert: true
				}
			}
		}))

		return res.json(cartItem)

	} catch(err) {
		if(err && err === 'ValidationError') {
			return res.json({
				error: 1,
				message: err.message,
				fields: err.errors
			})
		}

		next(err)
	}
}

module.exports = { index, update }