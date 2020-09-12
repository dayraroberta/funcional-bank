const helpers = require('../helpers/functions');
const models = require('../models/index');
const bcrypt = require('bcrypt');

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

const createAccountController = async (req, res, next) => {
    if (!helpers.existsAndHasValue(req.body, 'name')) {
        return res.status(422).json({
            success: false,
            message: 'name is required',
            payload: []
        });
    }

    if (!helpers.existsAndHasValue(req.body, 'lastname')) {
        return res.status(422).json({
            success: false,
            message: 'lastname is required',
            payload: []
        });
    }

    if (!helpers.existsAndHasValue(req.body, 'cpf')) {
        return res.status(422).json({
            success: false,
            message: 'cpf is required',
            payload: []
        });
    }

    if (!helpers.existsAndHasValue(req.body, 'birthday')) {
        return res.status(422).json({
            success: false,
            message: 'birthday is required',
            payload: []
        });
    }

    if (!helpers.existsAndHasValue(req.body, 'password')) {
        return res.status(422).json({
            success: false,
            message: 'password is required',
            payload: []
        });
    }

    if (req.body.password.length <= 3) {
        return res.status(422).json({
            success: false,
            message: 'password must be at least 4 characters',
            payload: []
        });
    }

    const name = req.body.name;
    const lastname = req.body.lastname;
    const cpf = req.body.cpf;
    const birthday = req.body.birthday;
    const password = req.body.password;
    try {
        const create_user = await models.User.create({
            name: name,
            lastname: lastname,
            cpf: bcrypt.hashSync(cpf, 10),
            birthday: new Date(birthday)
        });

        if ('id' in create_user) {
            const user_id = create_user.id;
            const generate_account_number = Date.now();

            const create_account = await models.UserAccounts.create({
                user_id: user_id,
                agency: '6819',
                account: generate_account_number.substr(-6),
                password: bcrypt.hashSync(password, 10),
                balance: 0.00
            });

            const payload = [{
                agency: create_account.agency,
                account: create_account.account,
                balance: create_account.balance
            }];

            return res.status(200).json({
                success: true,
                message: 'success on create your bank account!',
                payload: payload
            })
        }

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
    createAccountController
}