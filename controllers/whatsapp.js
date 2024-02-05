require('dotenv').config();

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const VONAGE_SANDBOX_NUMBER = process.env.VONAGE_SANDBOX_NUMBER;
const { Vonage } = require('@vonage/server-sdk');
const { WhatsAppText } = require('@vonage/messages');

exports.new = (req, res) =>{  
	res.render('whatsapp/new'); 
}

exports.create = (req, res) => {
	let vonage = new Vonage({
		applicationId: VONAGE_APPLICATION_ID,
  	privateKey: VONAGE_PRIVATE_KEY,
	},
	{
		apiHost: 'https://messages-sandbox.nexmo.com',
	});

	vonage.messages.send(
		new WhatsAppText({
			text: req.body.message,
			to: req.body.number,
			from: VONAGE_SANDBOX_NUMBER,
		}),
	)
		.then(resp => console.log(resp.messageUUID))
		.catch(err => console.error(err));

	res.redirect('/whatsapp/new');
}