export default function app() {
    const moment = require('moment');

    let session;

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

    Message.prototype.save = function() {
      var settings = {
        type: 'POST',
        contentType: 'application/json',
        url: 'http://tiny-za-server.herokuapp.com/collections/devonmoubry-devchat',
        data: JSON.stringify({
          sender: this.sender,
          body: this.body,
          timestamp: this.timestamp
        })
      }

      $.ajax(settings).then(function(data, status, xhr) {
          renderMessages();
      })
    }

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

      renderMessages();

      $('#messageWritingSpace').submit(function(event) {
        event.preventDefault();

        let newMessage = event.currentTarget[0].value;
        let sender = session.username;
        let timestamp = new Date();
        let message = new Message(sender, newMessage, timestamp);

        console.log(message);
        message.save();
      });
    }

    // ajax GET new message data array function
    // insert into dom: username, body, timestamp, delete button
    //event handler on the delete button
    function renderMessages() {
      var settings = {
        type: 'GET',
        dataType: 'json',
        url: 'http://tiny-za-server.herokuapp.com/collections/devonmoubry-devchat',
      }
      $.ajax(settings).then(function(data, status, xhr) {
        $('ul').empty();
        data.forEach(function(message, key, listObj, argument) {
          $('ul').prepend('<li><div class="sender">' + message.sender + '</div><div class="body">' + message.body + '</div><div class="timestamp">' + moment(message.timestamp).format("ddd, MMM Do YY, h:mm a") + '</div><a id="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></a></li>');
        })
      });

    }

    renderLogin();
}

// http://tiny-za-server.herokuapp.com/collections/devonmoubry-devchat
