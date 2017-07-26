const Activity = require('./activity.model');

require('./mongo').connect();

function getActivities(req, res) {
    const docquery = Activity.find({});
    docquery
        .exec()
        .then(activities => {
            res.status(200).json(activities);
        })
        .catch(error => {
            res.status(500).send(error);
            return;
        })
}

module.exports = {
    getActivities
}