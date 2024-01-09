const controllers = require('../controllers/whatsapp.js');
const express = require('express')
const whatsappRouter = express.Router()

whatsappRouter.get('/new', controllers.new);
whatsappRouter.post('/create', controllers.create);

module.exports = whatsappRouter;