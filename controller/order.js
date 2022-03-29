const CartItem = require('../model/CartItem')
const ShippingAddress = require('../model/ShippingAddress')
const Order = require('../model/Order')
const OrderItem = require('../model/OrderItem')
const { Types } = require('mongoose')

const index = async (req, res, next) => {
	try {
		let {skip = 0, limit = 10} = req.query
		let count = await Order.find({user: req.user._id}).countDocuments()
		let orders = await Order.find({user: req.user._id}).skip(parseInt(skip)).limit(parseInt(limit)).populate('order_items').sort('-createdAt')
		return res.json({
			data: orders.map(order => order.toJSON({virtuals: true})),
			count
		})
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

const store = async (req, res, next) => {
	try {
		let { shipping_fee, shipping_address } = req.body
		const items = await CartItem.find({user: req.user._id}).populate('product')
		if (!items) {
			return res.json({
				error: 1,
				message: 'Tambahkan barang ke keranjang untuk memesan'
			})
		}
		let shippingAddress = await ShippingAddress.findById(shipping_address)
		let order = new Order({
			_id: new Types.ObjectId(),
			status: 'waiting_payment',
			shipping_fee: shipping_fee,
			shipping_address: {
				provinsi: shippingAddress.provinsi,
				kabupaten: shippingAddress.kabupaten,
				kecamatan: shippingAddress.kecamatan,
				kelurahan: shippingAddress.kelurahan,
				detail: shippingAddress.detail
			},
			user: req.user._id
		})

		let orderItem = await OrderItem.insertMany(items.map(item => ({
			...item,
			name: item.product.name,
			qty: parseInt(item.qty),
			price: parseInt(item.product.price),
			order: order._id,
			product: item.product._id
		})))
		orderItem.forEach(item => order.order_items.push(item))
		order.save()
		await CartItem.deleteMany({user: req.user._id})

		return res.json(order)

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

module.exports = { index, store }