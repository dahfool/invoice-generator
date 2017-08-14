import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/InvoiceGenerator',  { useMongoClient: true });

export default mongoose;