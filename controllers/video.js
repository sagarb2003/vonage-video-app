require('dotenv').config();

const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_PRIVATE_KEY = process.env.VONAGE_PRIVATE_KEY;
const VONAGE_VIRTUAL_NUMBER = process.env.VONAGE_VIRTUAL_NUMBER;
const { Vonage } = require('@vonage/server-sdk');

exports.new = (req, res) => {  
	res.render('video/new'); 
}

exports.create = async (req, res) => {
	let vonage = new Vonage({
		applicationId: VONAGE_APPLICATION_ID,
  	privateKey: VONAGE_PRIVATE_KEY,
	});

	let session = await vonage.video.createSession()
		.then(resp => {
			let sessionId = resp.sessionId;
			res.redirect(`/video/show/${sessionId}`)
		})
		.catch(err => console.error(err));
}

exports.show = (req, res) => {
	let vonage = new Vonage({
		applicationId: VONAGE_APPLICATION_ID,
  	privateKey: VONAGE_PRIVATE_KEY,
	});

	let token = vonage.video.generateClientToken(req.params.sessionId);

	let path = `/video/show/${req.params.sessionId}`
	let meetingLink = process.env.TUNNEL_URI ? `${process.env.TUNNEL_URI}${path}` : `http://localhost:3000${path}`;

	res.render('video/show', {
    apiKey: VONAGE_APPLICATION_ID,
    sessionId: req.params.sessionId,
    token: token,
		meetingLink: meetingLink,
  });
}