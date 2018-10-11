import * as functions from "firebase-functions";
const twilio = require('twilio').twiml.VoiceResponse;

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  //response.send("Hello from Firebase! mkm test2");
  const twiml = new twilio();
  twiml.say("hello world!", { voice: "alice" });
  console.log(request.body)  
  // Render the response as XML in reply to the webhook request
  response.type("text/xml");
  response.send(twiml.toString());
});
