const express = require('express');
const router = express.Router();
const User = require('../controllers/user');
const UserAccount = require('../controllers/user_account');
/* GET users listing. */
router.put('/sacar', UserAccount.withdrawMoneyController);
router.put('/depositar', UserAccount.depositMoneyController);
router.get('/saldo', UserAccount.balanceController);

module.exports = router;
