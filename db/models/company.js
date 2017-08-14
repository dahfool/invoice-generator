import mongoose from 'mongoose';

const CompanySchema = mongoose.Schema({
    name: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});


const Company = mongoose.model('Company', CompanySchema);

export default Company;
