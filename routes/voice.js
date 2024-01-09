const controllers = require('../controllers/voice.js');
const express = require('express')
const voiceRouter = express.Router()

voiceRouter.get('/new', controllers.new);
voiceRouter.post('/create', controllers.create);

module.exports = voiceRouter;