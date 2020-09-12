
const withdrawMoneyController = (req, res, next) => {
    return res.status(200).json({
        success: true
    })
}
const depositMoneyController = (req, res, next) => {
    return res.status(200).json({
        success: true
    })
}
const balanceController = (req, res, next) => {
    return res.status(200).json({
        success: true
    })
}

module.exports = {
    withdrawMoneyController,
    depositMoneyController,
    balanceController
}