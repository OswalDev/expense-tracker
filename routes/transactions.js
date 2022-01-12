const express = require('express');
const router = express.Router();
const {getTransactions,addTransactions, deleteTransactions} = require('../controllers/transactionsController');

router
.route('/')
.get(getTransactions)
.post(addTransactions); //method added to route


router
.route('/:id')
.delete(deleteTransactions);

module.exports = router;