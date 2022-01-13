const moongose = require('mongoose');

const TransactionSchema = new moongose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please insert some text']
    },
    amount: {
        type: Number,
        required: [true, 'Please add an amount'] 
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = moongose.model('Transaction', TransactionSchema);