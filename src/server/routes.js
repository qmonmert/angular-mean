const express = require('express');
const router = express.Router();

router.get('/activities', (req, res) => {
    res.send(200, [
        {"id": 1, "name": "Etape du Tour"}
    ])
});

module.exports = router;