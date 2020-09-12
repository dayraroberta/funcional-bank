const helpers = require('../helpers/functions');

const withdrawMoneyController = (req, res, next) => {
    if (!helpers.existsAndHasValue('value', req.body)) {
        return res.status(422).json({
            success: false,
            message: 'value is required',
            payload: []
        });
    }
}
const depositMoneyController = (req, res, next) => {
    if (!helpers.existsAndHasValue('value', req.body)) {
        return res.status(422).json({
            success: false,
            message: 'value is required',
            payload: []
        });
    }
}
const balanceController = (req, res, next) => {
    return res.status(422).json({
        success: false,
        message: 'value is required',
        payload: []
    });
}

module.exports = {
    withdrawMoneyController,
    depositMoneyController,
    balanceController
}