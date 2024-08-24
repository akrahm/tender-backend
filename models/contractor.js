const mongoose = require('mongoose');

const contractorSchema = new mongoose.Schema({
    name: String,
    email: String
});

module.exports = mongoose.model('Contractor', contractorSchema);
