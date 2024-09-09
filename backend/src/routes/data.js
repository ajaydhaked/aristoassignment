const express = require('express');
const router = express.Router();

let mockResearchPapers = require('../../config/database');
router.get('/search', (req, res) => {
    const { search } = req.query;
    let results = mockResearchPapers;
    if (search) {
        results = mockResearchPapers.filter((paper) =>
            paper.title.toLowerCase().includes(search.toLowerCase()) ||
            paper.authors.join(', ').toLowerCase().includes(search.toLowerCase())
        );
    }
    
    res.json(results.slice(0, 5));
});

module.exports = router;