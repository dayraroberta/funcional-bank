const express = require('express');
const router = express.Router();
const Index = require('../controllers/index');
/* GET home page. */
router.get('/', Index.verifyServerController);

module.exports = router;
