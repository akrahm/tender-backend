const Proposal = require('../models/proposal');
const Client = require('../models/client');
const Contractor = require('../models/contractor');
const Consultant = require('../models/consultant');

exports.createProposal = async (req, res) => {
    try {
        const { title, description, clientId, contractorId, consultantId } = req.body;
        const proposal = new Proposal({
            title,
            description,
            client: clientId,
            contractor: contractorId,
            consultant: consultantId
        });
        await proposal.save();
        res.status(201).send(proposal);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.getProposals = async (req, res) => {
    try {
        const proposals = await Proposal.find().populate('client contractor consultant');
        res.json(proposals);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.getProposalById = async (req, res) => {
    try {
        const proposal = await Proposal.findById(req.params.id).populate('client contractor consultant');
        if (!proposal) {
            return res.status(404).send('Proposal not found');
        }
        res.json(proposal);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.updateProposal = async (req, res) => {
    try {
        const proposal = await Proposal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!proposal) {
            return res.status(404).send('Proposal not found');
        }
        res.json(proposal);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.deleteProposal = async (req, res) => {
    try {
        const proposal = await Proposal.findByIdAndDelete(req.params.id);
        if (!proposal) {
            return res.status(404).send('Proposal not found');
        }
        res.send('Proposal deleted');
    } catch (err) {
        res.status(400).send(err.message);
    }
};
