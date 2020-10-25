const {Router} = require('express');
const router = Router();
const Event = require('../models/Event');

router.get('/::id', async (req, res) => {

})

router.post('/create', async (req, res) => {
    console.log('event')

    const {eventname, address, date, username} = req.body;

    const event = new Event({
        eventname: eventname,
        address: address,
        date: date,
        members: {
            0: {username: username}
        }
    });
    await event.save();
    res.send({id: event.id});
})
module.exports = router;
