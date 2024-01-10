const smsRouter = require('./routes/sms');
const whatsappRouter = require('./routes/whatsapp');
const voiceRouter = require('./routes/voice');
const videoRouter = require('./routes/video');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=>{ 
	res.render('index'); 
});

app.use('/sms/', smsRouter);
app.use('/whatsapp/', whatsappRouter);
app.use('/voice/', voiceRouter);
app.use('/video/', videoRouter);

app.listen(port, (error) => {
  if(!error) {
		console.log(`Server running and App is listening on port ${port}`);
  } else {
    console.log(`Error occurred, server can't start. Error: ${error}`);
  }
});