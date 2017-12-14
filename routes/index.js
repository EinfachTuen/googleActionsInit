var express = require('express');
const { ActionsSdkApp } = require('actions-on-google');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res) {
    const app = new ActionsSdkApp({request: req, response: res});
    console.log("runs into post");
    function mainIntent (app) {
        console.log('mainIntent');
        let inputPrompt = app.buildInputPrompt(false, '<speak>Hi! <break time="1"/> ' +
            'I can read out an ordinal like ' +
            '<say-as interpret-as="ordinal">123</say-as>. Say a number.</speak>');
        app.ask(inputPrompt);
    }

    function rawInput (app) {
        console.log('rawInput');
        if (app.getRawInput() === 'bye') {
            app.tell('Goodbye!');
        } else {
            let inputPrompt = app.buildInputPrompt(false, '<speak>You said, <say-as interpret-as="ordinal">' +
                app.getRawInput() + '</say-as></speak>');
            app.ask(inputPrompt);
        }
    }

    let actionMap = new Map();
    actionMap.set(app.StandardIntents.MAIN, mainIntent);
    actionMap.set(app.StandardIntents.TEXT, rawInput);

    app.handleRequest(actionMap);
});

module.exports = router;
