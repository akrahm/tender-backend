const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
    title: String,
    description: String,
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
    contractor: { type: mongoose.Schema.Types.ObjectId, ref: 'Contractor' },
    consultant: { type: mongoose.Schema.Types.ObjectId, ref: 'Consultant' },
    status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' }
});

module.exports = mongoose.model('Proposal', proposalSchema);
