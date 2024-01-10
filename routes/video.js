const controllers = require('../controllers/video.js');
const express = require('express')
const videoRouter = express.Router()

videoRouter.get('/new', controllers.new);
videoRouter.post('/create', controllers.create);
videoRouter.get('/show/:sessionId', controllers.show);

module.exports = videoRouter;