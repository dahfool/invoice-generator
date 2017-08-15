import mongoose from 'mongoose';

const CompanySchema = mongoose.Schema({
    name: {
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

const Company = mongoose.model('Company', CompanySchema);

export default Company;
