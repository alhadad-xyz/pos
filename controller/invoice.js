const { subject } = require('@casl/ability')
const Invoice = require('../model/Invoice')
const policyFor = require('../utils/policy')

const index = async (req, res, next) => {
    try {
        let policy = policyFor(req.user)
        let subjectInvoice = subject('Invoice', {...invoice, user_id: invoice.user._id})
        if (!policy.can('read', subjectInvoice)) {
            return res.json({
                error: 1,
                message: 'Tidak memiliki akses untuk melihat invoice'
            })
        }
        
        if (!policy.can('read', 'Invoice')) {
            return res.json({
                error: 1,
                message: 'Tidak memiliki akses untuk melakukan aksi'
            })
        }

        let { order_id } = req.params
        let invoice = await Invoice.findOne({order: order_id}).populate('order').populate('user')


        return res.json(invoice)
    } catch (error) {
       return res.json({
            error: 1,
            message: 'error saat mengambil data invoice',
        })

		next(err)
    }
}

module.exports = { index }