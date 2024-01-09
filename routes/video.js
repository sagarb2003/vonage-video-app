const express = require('express')
const videoRouter = express.Router()

videoRouter.get('/new', (req, res)=>{ 
	res.render('video/new'); 
});

module.exports = videoRouter;