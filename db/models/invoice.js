import mongoose from 'mongoose'

const invoiceSchema = mongoose.Schema({
    bankName: {
        type: String
    },
    accountNumber: {
        type: Number
    },
    sortCode: {
        type: Number
    },
    companyName: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    postcode: {
        type: String
    },
    number: {
        type: Number
    },
    email: {
        type: String
    },
    vat: {
        type: Number
    }
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

export default Invoice;