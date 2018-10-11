import * as functions from "firebase-functions";
const twilio = require("twilio");

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  const twiml = new twilio.TwimlResponse();
  twiml.say("hello world!", { voice: "alice" });
  console.log(request.body, request.params);
  // Render the response as XML in reply to the webhook request
  response.type("text/xml");
  response.send(twiml.toString());
});
