import mongoose from 'mongoose';

const BankSchema = mongoose.Schema({
    name: {
        type: String
    },
    accountNumber: {
        type: Number
    },
    sortCode: {
        type: Number
    }
});

const Bank = mongoose.model('Bank', BankSchema);

export default Bank;
