const {Router} = require('express');
const router = Router();
const Event = require('../models/Event');

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const event = await Event.findById(id).exec();
        console.log(id, event);
        res.send({eventData: event});
    } catch (e) {
        next(e);
    }
})

router.post('/create', async (req, res, next) => {
    console.log('event')

    const {eventname, address, date, username} = req.body;

    try {
        const event = new Event({
            eventname: eventname,
            address: address,
            date: date,
            members: [{
                id: 0,
                username: username,
                readiness: 'not_ready',
                location: null
            }]
        });
        await event.save();
        res.send({id: event.id});
    } catch (e) {
        next(e)
    }
})
module.exports = router;
