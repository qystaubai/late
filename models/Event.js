const {Schema, model} = require('mongoose');

const schema = new Schema({
    name: {type: String, required: true},
    code: {type: String, required: true, unique: true},
    date: {type: Date, required: true},
    members: {
        type: {
            username: String,
            status: String,
            location: String
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