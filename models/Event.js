const {Schema, model} = require('mongoose');

const schema = new Schema({
    eventname: {type: String, required: true},
    address: {type: String, required: true},
    date: {type: String, required: true},
    members: {
        type: {
            id: Number,
            username: String,
            status: String,
            location: Array | null
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
