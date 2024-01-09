require('dotenv').config();

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const VONAGE_VIRTUAL_NUMBER = process.env.VONAGE_VIRTUAL_NUMBER;
const { Vonage } = require('@vonage/server-sdk');
const { SMS } = require('@vonage/messages');

exports.new = (req, res) =>{  
	res.render('sms/new'); 
}

exports.create = (req, res) => {
	let vonage = new Vonage({
		applicationId: VONAGE_APPLICATION_ID,
  		privateKey: VONAGE_PRIVATE_KEY,
	});

	vonage.messages.send(
		new SMS(
			req.body.message,
			req.body.number,
			VONAGE_VIRTUAL_NUMBER,
		),
	)
		.then(resp => console.log(resp.messageUUID))
		.catch(err => console.error(err));

	res.redirect('/sms/new');
}