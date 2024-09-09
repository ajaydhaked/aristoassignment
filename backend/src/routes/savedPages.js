// make route for getting all saved pages
const express = require('express');
const router = express.Router();

const mockResearchPapers = require('../../config/database');
router.get('/getSavedPages', (req, res) => {
    const savedPages = mockResearchPapers.filter((paper) => paper.isSaved);
    res.json(savedPages);
});

router.post('/savedPages', (req, res) => {
    const { id } = req.body;
    const paper = mockResearchPapers.find((paper) => paper.id === id);
    if (!paper) {
        return res.status(404).json({ error: 'Paper not found' });
    }
    if(paper.isSaved) {
        paper.isSaved = false;
        res.json({ message: 'Paper removed from saved pages' });
    }
    else {
        paper.isSaved = true;
        res.json({ message: 'Paper saved successfully' });
    }
});

module.exports = router;