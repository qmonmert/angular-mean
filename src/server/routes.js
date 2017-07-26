const express = require('express');
const router = express.Router();

const activityService = require('./activity.service');

router.get('/activities', (req, res) => {
    activityService.getActivities(req, res);
    // res.send(200, [
    //     {"id": 1, "name": "Etape du Tour"}
    // ])
});

module.exports = router;