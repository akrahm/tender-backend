const mongoose = require('mongoose');

const consultantSchema = new mongoose.Schema({
    name: String,
    email: String
});

module.exports = mongoose.model('Consultant', consultantSchema);
