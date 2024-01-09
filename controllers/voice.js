require('dotenv').config();

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const VONAGE_VIRTUAL_NUMBER = process.env.VONAGE_VIRTUAL_NUMBER;
const { Vonage } = require('@vonage/server-sdk');

exports.new = (req, res) =>{  
	res.render('voice/new'); 
}

exports.create = (req, res) => {
	let vonage = new Vonage({
		applicationId: VONAGE_APPLICATION_ID,
  		privateKey: VONAGE_PRIVATE_KEY,
	});

	vonage.voice.createOutboundCall({
		to: [{
			type: 'phone',
			number: req.body.number
		}],
		from: {
			type: 'phone',
			number: VONAGE_VIRTUAL_NUMBER
		},
		ncco: [{ action: 'talk', text: req.body.message }]
	})
		.then(resp => console.log(resp))
		.catch(err => console.error(err));

	res.redirect('/voice/new');
}