const policyFor = require('../utils/policy')

function policy_check(action, subject) {
	return function(req, res, next) {
		let policy = policyFor(req.user)
		if(!policy.can(action, subject)) {
			return res.json({
				error: 1,
				message: `Tidak memiliki akses untuk melakukan aksi ${action} ${subject}`
			})
		}

		next()
	}
}

module.exports = policy_check