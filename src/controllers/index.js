const verifyServerController = (req, res, next) => {
    return res.status(200).json({
        success: true,
        message: 'server is running',
        payload: []
    });
}

module.exports = {
    verifyServerController
}