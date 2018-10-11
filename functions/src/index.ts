import * as functions from "firebase-functions";
const twilio = require("twilio").twiml.VoiceResponse;

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  //response.send("Hello from Firebase! mkm test2");
  const twiml = new twilio();
  const gatherNode1 = twiml.gather({
    input: "speech dtmf",
    timeout: 3,
    numDigits: 1
  });
  gatherNode1.say("For sales, press 1. For support, press 2.");

  const data = twiml.toString();
  console.log(data);

  function gather() {
    const gatherNode = twiml.gather({ numDigits: 1 });
    gatherNode.say("For sales, press 1. For support, press 2.");
  }

  // If the user entered digits, process their request
  if (request.body.Digits) {
    switch (request.body.Digits) {
      case "1":
        twiml.say("You selected sales. Good for you!" + data);
        break;
      case "2":
        twiml.say("You need support. We will help!");
        break;
      default:
        twiml.say("Sorry, I don't understand that choice.").pause();
        gather();
        break;
    }
  } else {
    // If no input was sent, use the <Gather> verb to collect user input
    gather();
  }
  console.log(request.body);
  // Render the response as XML in reply to the webhook request
  response.type("text/xml");
  response.send(twiml.toString());
});
