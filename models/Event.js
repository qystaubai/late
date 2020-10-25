const {Schema, model} = require('mongoose');

const schema = new Schema({
    eventname: {type: String, required: true},
    address: {type: String, required: true},
    date: {type: String, required: true},
    members: {
        type: {
            username: String,
            status: String,
            location: Array
        }
    },
    chatLogs: {
        type: {
            username: String,
            date: Date,
            message: String
        }
    }
})

module.exports = model('Event', schema);
