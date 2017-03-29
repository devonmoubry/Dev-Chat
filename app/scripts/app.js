export default function app() {
    let session;

  	//const moment = require('moment');
  	//moment().format("ddd, MMM Do YY, h:mm a");

    function Session(username) {
      'use strict';

      this.username = username;
    }

    function Message(sender, body, timestamp) {
      'use strict'

      this.sender = sender;
      this.body = body;
      this.timestamp = timestamp;
    }

    // Message.prototype.save = function() {
    //
    // }
    //
    // Message.prototype.delete = function() {
    // }

    function renderLogin() {
    	const $usernameSubmit = $('#submitUsername');
    	$usernameSubmit.submit(function(event) {
    		event.preventDefault();
    		session = new Session(event.currentTarget[0].value);
        $('#loginContainer').hide();
        renderChat();
    	});
    }

    // 1. Render the list of existing messages
    // 2. Setup the form for creating new messages
    function renderChat() {
      $('#chatContainer').show();

      $('#messageWritingSpace').submit(function(event) {
        event.preventDefault();

        let newMessage = event.currentTarget[0].value;
        let sender = session.username;
        let timestamp = new Date();
        let message = new Message(sender, newMessage, timestamp);

        console.log(message);
      });
    }



    renderLogin();
}

// http://tiny-za-server.herokuapp.com/collections/devonmoubry-devchat
