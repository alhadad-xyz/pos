const mongoose = require('mongoose')

const Schema = mongoose.Schema

const OrderItemSchema = new Schema({
	name: {
		type: String,
		minlength: [3, 'Panjang nama makanan minimal 3 karakter'],
		required: [true, 'Nama makanan harus diisi']
	},

	price: {
		type: Number,
		default: 0
	},

	qty: {
		type: Number,
		required: [true, 'Nama makanan harus diisi'],
		min: [1, 'tambahkan minimal 1 product']
	},

	image_url: String,

	product: {
		type: Schema.Types.ObjectId,
		ref: 'Product'
	},

	order: {
		type: Schema.Types.ObjectId,
		ref: 'Order'
	}

}, { timestamps: true })

const OrderItem = mongoose.model('OrderItem', OrderItemSchema)

module.exports = OrderItem