const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const activitySchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: String
}, {
    collection: 'Activities'
});
const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;