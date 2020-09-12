const express = require('express');
const router = express.Router();
const UserAccount = require('../controllers/user_account');
/* GET users listing. */
router.put('/sacar', UserAccount.withdrawMoneyController);
router.put('/depositar', UserAccount.depositMoneyController);
router.post('/criar', UserAccount.createAccountController);
router.get('/saldo', UserAccount.balanceController);

module.exports = router;
