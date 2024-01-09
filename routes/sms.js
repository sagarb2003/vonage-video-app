const controllers = require('../controllers/sms.js');
const express = require('express')
const smsRouter = express.Router()

smsRouter.get('/new', controllers.new);
smsRouter.post('/create', controllers.create);

module.exports = smsRouter;