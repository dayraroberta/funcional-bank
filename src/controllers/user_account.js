const helpers = require('../helpers/functions');
const models = require('../models/index');
const bcrypt = require('bcrypt');
const functions = require('../helpers/functions');
const { get } = require('../routes/accounts');

const withdrawMoneyController = async (req, res, next) => {
    if (!helpers.existsAndHasValue(req.body, 'value')) {
        return res.status(422).json({
            success: false,
            message: 'value is required',
            payload: []
        });
    }
    console.log(req.body);
    if (!helpers.existsAndHasValue(req.body, 'account')) {
        return res.status(422).json({
            success: false,
            message: 'account is required',
            payload: []
        });
    }
    if (!helpers.existsAndHasValue(req.body, 'agency')) {
        return res.status(422).json({
            success: false,
            message: 'agency is required',
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

    if (typeof (req.body.value) !== 'number') {
        return res.status(422).json({
            success: false,
            message: 'invalid value. Insert a number.',
            payload: []
        });
    }

    const account = req.body.account;
    const agency = req.body.agency;
    const password = req.body.password;
    const value = req.body.value;
    try {
        const get_account = await models.UserAccounts.findOne({
            where: {
                account: account,
                agency: agency
            }
        });

        if (get_account.length <= 0) {
            return res.status(404).json({
                success: false,
                message: 'account not found',
                payload: []
            });
        }

        const get_user = await models.Users.findOne({
            where: {
                id: get_account.userId
            }
        });
        const verify_password = bcrypt.compareSync(password, get_user.password);

        if (!verify_password) {
            return res.status(422).json({
                success: false,
                message: 'incorrect password',
                payload: []
            });
        }
        if (!helpers.verifyBalance(get_account.balance, value)) {
            return res.status(422).json({
                success: false,
                message: 'insuficient balance',
                payload: []
            });
        }

        const update_balance = parseFloat(get_account.balance) - parseFloat(value);
        const withdraw_money = await models.UserAccounts.update(
            {
                balance: update_balance
            },
            {
                where: {
                    account: account,
                    agency: agency
                }
            }
        );
        const get_new_balance = await models.UserAccounts.findOne({
            where: {
                account: account,
                agency: agency
            }
        });
        const current_balance = get_new_balance.balance;

        return res.status(200).json({
            success: true,
            message: 'balance updated!',
            payload: [{
                current_balance: current_balance
            }]
        });
    } catch (error) {
        console.log(error);
        return res.status(422).json({
            success: false,
            message: 'error on api',
            payload: []
        });
    }

}
const depositMoneyController = async (req, res, next) => {
    if (!helpers.existsAndHasValue(req.body, 'value')) {
        return res.status(422).json({
            success: false,
            message: 'value is required',
            payload: []
        });
    }
    console.log(req.body);
    if (!helpers.existsAndHasValue(req.body, 'account')) {
        return res.status(422).json({
            success: false,
            message: 'account is required',
            payload: []
        });
    }
    console.log(req.body.agency);
    if (!helpers.existsAndHasValue(req.body, 'agency')) {
        return res.status(422).json({
            success: false,
            message: 'agency is required',
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

    if (typeof (req.body.value) !== 'number') {
        return res.status(422).json({
            success: false,
            message: 'invalid value. Insert a number.',
            payload: []
        });
    }
    const account = req.body.account;
    const agency = req.body.agency;
    const password = req.body.password;
    const value = req.body.value;
    try {
        const get_account = await models.UserAccounts.findOne({
            where: {
                account: account,
                agency: agency
            }
        });
        console.log(get_account.balance);

        if (get_account.length <= 0) {
            return res.status(404).json({
                success: false,
                message: 'account not found',
                payload: []
            });
        }

        const get_user = await models.Users.findOne({
            where: {
                id: get_account.userId
            }
        });
        const verify_password = bcrypt.compareSync(password, get_user.password);

        if (!verify_password) {
            return res.status(422).json({
                success: false,
                message: 'incorrect password',
                payload: []
            });
        }

        const update_balance = parseFloat(get_account.balance) + parseFloat(value);

        const account_update = await models.UserAccounts.update(

            {
                balance: update_balance
            },
            {
                where: {
                    account: account,
                    agency: agency
                }
            },
        );
        const get_new_balance = await models.UserAccounts.findOne({
            where: {
                account: account,
                agency: agency
            }
        });
        const current_balance = get_new_balance.balance;

        return res.status(200).json({
            success: true,
            message: 'balance updated!',
            payload: [{
                current_balance: current_balance
            }]
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'error on api',
            payload: []
        });
    }
}
const balanceController = async (req, res, next) => {
    if (!helpers.existsAndHasValue(req.query, 'account')) {
        return res.status(422).json({
            success: false,
            message: 'account is required',
            payload: []
        });
    }
    if (!helpers.existsAndHasValue(req.query, 'agency')) {
        return res.status(422).json({
            success: false,
            message: 'agency is required',
            payload: []
        });
    }

    if (!helpers.existsAndHasValue(req.query, 'password')) {
        return res.status(422).json({
            success: false,
            message: 'password is required',
            payload: []
        });
    }

    const account = req.query.account;
    const agency = req.query.agency;
    const password = req.query.password;

    const get_account = await models.UserAccounts.findOne({
        where: {
            account: account,
            agency: agency
        }
    });

    if (get_account.length <= 0) {
        return res.status(404).json({
            success: false,
            message: 'account not found',
            payload: []
        });
    }
    try {
        const get_user = await models.Users.findOne({
            where: {
                id: get_account.userId
            }
        });
        const verify_password = bcrypt.compareSync(password, get_user.password);

        if (!verify_password) {
            return res.status(422).json({
                success: false,
                message: 'incorrect password',
                payload: []
            });
        }

        const get_balance = get_account.balance;
        return res.status(200).json({
            success: true,
            message: 'get balance',
            payload: [{
                balance: get_balance
            }]
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'error on api',
            payload: []
        });
    }
}

const createAccountController = async (req, res, next) => {
    console.log(req.body);
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
    console.log('>>', password);

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const crypted_password = bcrypt.hashSync(password, salt);
    console.log(crypted_password);
    try {
        console.log('entrou aqui');
        const create_user = await models.Users.create({
            name: name,
            lastname: lastname,
            cpf: bcrypt.hashSync(cpf, 10),
            birthday: new Date(birthday),
            password: crypted_password,
        });

        console.log(create_user);

        if ('id' in create_user) {
            console.log('aqui');
            const user_id = create_user.id;
            const generate_account_number = Date.now();
            const account = generate_account_number.toString().substr(-8);
            const create_account = await models.UserAccounts.create({
                userId: user_id,
                agency: '6819',
                account: account,
                balance: 0.00
            });
            var payload = [{
                agency: create_account.agency,
                account: create_account.account,
                balance: create_account.balance
            }];

        }
        return res.status(200).json({
            success: true,
            message: 'success on create your bank account!',
            payload: payload
        })

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