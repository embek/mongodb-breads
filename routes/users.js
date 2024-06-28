var express = require('express');
const User = require('../models/User');
var router = express.Router();

router.get('/', async function (req, res, next) {
    try {
        const data = await User.readUser(req.query);
        res.status(200).json({ data, total, pages, page: req.query.page, limit: req.query.limit })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.get('/:id', async function (req, res, next) {
    try {
        const data = await User.getUser(req.params.id);
        res.status(200).json({ data })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.post('/', async function (req, res, next) {
    try {
        const data = await User.addUser(req.body);
        res.status(201).json({ data })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.put('/:id', async function (req, res, next) {
    try {
        const data = await User.updateUser(req.params.id);
        res.status(201).json({ data })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.delete('/:id', async function (req, res, next) {
    try {
        const data = await User.removeUser(req.params.id);
        res.status(200).json({ data })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router;