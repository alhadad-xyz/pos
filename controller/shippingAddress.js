const ShippingAddress = require('../model/ShippingAddress')
const policyFor = require('../utils/policy')

const index = async (req, res, next) => {
	try {
		let {skip = 0, limit = 10} = req.query
		let count = await ShippingAddress.find({user: req.user._id}).countDocuments()
		let shippingAddress = await ShippingAddress.find({user: req.user._id}).skip(parseInt(skip)).limit(parseInt(limit)).sort('-createdAt')
		return res.json({data: shippingAddress, count})
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
		let payload = req.body
		let user = req.user

		let shippingAddress = new ShippingAddress({...payload, user: user._id})
		await shippingAddress.save()
		return res.json(shippingAddress)
	} catch(err) {
		if ( err && err.name === 'ValidationError') {
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
		let {_id, ...payload} = req.body
		let {id} = req.params
		let shippingAddress = await ShippingAddress.findById(id)
		let subjectAddress = subject('ShippingAddress', {...address, user_id: shippingAddress.user})
		let policy = policyFor(req.user)
		if (!policy.can('update', subjectAddress)) {
			return res.json({
				error: 1,
				message: 'Tidak memiliki akses untuk melakukan aksi'
			})
		}

		shippingAddress = await ShippingAddress.findByIdAndUpdate(req.params.id, {...payload, user: user._id}, { new: true, runValidators: true })
		return res.json(shippingAddress)
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

const destroy = async (req, res, next) => {
	try {
		let {id} = req.params
		let shippingAddress = await ShippingAddress.findById(id)
		let subjectAddress = subject('ShippingAddress', {...address, user_id: shippingAddress.user})
		let policy = policyFor(req.user)
		if (!policy.can('delete', subjectAddress)) {
			return res.json({
				error: 1,
				message: 'Tidak memiliki akses untuk melakukan aksi'
			})
		}

		shippingAddress = await ShippingAddress.findByIdAndDelete(req.params.id)
		return res.json(shippingAddress)
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

module.exports = { index, store, update, destroy }