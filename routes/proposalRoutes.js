const express = require('express');
const { createProposal, getProposals, getProposalById, updateProposal, deleteProposal } = require('../controllers/proposalController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware('client'), createProposal);
router.get('/', authMiddleware(), getProposals);
router.get('/:id', authMiddleware(), getProposalById);
router.put('/:id', authMiddleware('client'), updateProposal);
router.delete('/:id', authMiddleware('client'), deleteProposal);

module.exports = router;
