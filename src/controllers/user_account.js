const helpers = require('../helpers/functions');
const models = require('../models/index');

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

const createAccount = (req, res, next) => {
    if (!helpers.existsAndHasValue('name', req.body)) {
        return res.status(422).json({
            success: false,
            message: 'name is required',
            payload: []
        });
    }

    if (!helpers.existsAndHasValue('lastname', req.body)) {
        return res.status(422).json({
            success: false,
            message: 'lastname is required',
            payload: []
        });
    }

    if (!helpers.existsAndHasValue('cpf', req.body)) {
        return res.status(422).json({
            success: false,
            message: 'cpf is required',
            payload: []
        });
    }

    if (!helpers.existsAndHasValue('birthday', req.body)) {
        return res.status(422).json({
            success: false,
            message: 'birthday is required',
            payload: []
        });
    }

    if (!helpers.existsAndHasValue('lastname', req.body)) {
        return res.status(422).json({
            success: false,
            message: 'lastname is required',
            payload: []
        });
    }

    const name = req.body.name;
    const lastname = req.body.lastname;
    const cpf = req.body.cpf;
    const birthday = req.body.birthday;

    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'error on api',
            payload: []
        });
    }
}

module.exports = {
    withdrawMoneyController,
    depositMoneyController,
    balanceController,
    createAccount
}