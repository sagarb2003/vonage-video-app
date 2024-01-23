# Hack This Fall Demo

This is a demo application built in Node JS using [Express.js](https://expressjs.com/) and the [Vonage Node SDK](https://github.com/Vonage/vonage-node-sdk), but you could build equivalent versions of this app in a different programming language using one of Vonage's other [Server SDKs](https://developer.vonage.com/en/tools).

## Pre-requisites

To run this demo, you will need:

- A [Vonage Developer account](https://developer.vonage.com/sign-up)
- [Node.js](https://nodejs.org/en) installed
- (Optional) [Ngrok](https://ngrok.com/) installed (only required if you want to run the Video demo and connect to the video call from a separate device)

## Setting up your Vonage Application

You'll need to set up a Vonage application to manage the capabilities and obtain the API credentials for this app.

1. Log onto the [Vonage Developer Dashboard](https://dashboard.nexmo.com/)

2. Go to the [Applications](https://dashboard.nexmo.com/applications) page and click on the  'Create a new application' button

3. Generate a private key for the application by clicking on the 'Generate public and private key' button. Download the `private.key` file and keep it somewhere safe.

4. Under 'Capabilities', enable the application for **Voice**, **Messages**, and **Video** by toggling the switches to 'on' (for Messages, you will need to fill in the 'Inbound URL' and 'Status URL' fields, but you can just put some dummy urls here, since we won't be using the webhooks)

5. Click on the 'Generate new application' button at the bottom. This will generate and Application ID for the Vonage application; make a note of this for later.

6. (Optional) For the SMS and/or Voice parts the demo, you will need a number enabled for SMS and/or Voice. Go to the [Buy Numbers](https://dashboard.nexmo.com/buy-numbers) page and purchase a number with both SMS and/or Voice capabilites (depending on whether you want to run either part of the SMS part of the demo, the Voice part, or both). You can then link this number in the Dashboard to the Vonage application you just created by accessing that application under [Applications](https://dashboard.nexmo.com/applications) page and licking on the 'Link' button next to the number. (Note that to send SMS in India, numbers need to be **registered**. See [India SMS Features and Restrictions](https://api.support.vonage.com/hc/en-us/articles/204017423-India-SMS-Features-and-Restrictions))

7. (Optional) The WhatsApp part of the demo application uses the [Messages Sandbox](https://developer.vonage.com/en/messages/concepts/messages-api-sandbox), so you don't need to set up your own WhatsApp Business Account (WABA). However, you will need to allow-list the number that you want to send WhatsApp messages to within the Sandbox. To do this go to the [Messages Sandbox](https://dashboard.nexmo.com/messages/sandbox) page in the Dashboard and follow the instructions there to allow-list your number. Make a note of the WhatsApp Sandbox number for later.

## Running the Demo Locally

1. Open Terminal and navigate to wherever you want to clone the repository.

2. Clone the repository
    ```
    git clone https://github.com/Vonage-Community/demo-messages_voice_video-node-hack_this_fall.git
    ```

2. Change directory (`cd`) into the root directory of the cloned repository and install the dependencies
    ```
    npm install
    ```

3. Copy or move the `private.key` file you downloaded earlier the root directory of this demo application

4. Copy or rename the `.env-sample` file to `.env` and update the file with your Vonage credentials:
    - `VONAGE_APPLICATION_ID`. This is the Application ID you generated earlier when creating the Vonage Application
    - `VONAGE_VIRTUAL_NUMBER`. If you completed step 6 of Setting up your Vonage Application, this is the Vonage virtual numer you purchased.
    - `VONAGE_SANDBOX_NUMBER`. If you completed step 7 of Setting up your Vonage Application, this is the WhatsApp number for the Vonage Messages Sandbox

5. Start up Ngrok
    ```
    ngrok http 3000
    ```

6. Copy the Ngrok `Forwarding` URL and set this in the `.env` file as the value for `TUNNEL_URI`

7. In a separate Terminal tab, start the Node application
    ```
    node app.js
    ```

8. In your browser, navigate to `localhost:3000`