export default function app() {
    let session;

  	const moment = require('moment');
  	 console.log(moment().format("ddd, MMM Do YY, h:mm a"));

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
      // console.log('hello');
      // let newMessage = event.currentTarget[0].value;
      // let settings = {
      //   type: 'POST',
      //   contentType: 'json',
      //   url: 'http://tiny-za-server.herokuapp.com/collections/devonmoubry-devchat',
      //   data: newMessage
      // }
    }

    Message.prototype.delete = function() {
      //   let id = event.currentTarget.id;
      //   let url = 'http://tiny-za-server.herokuapp.com/collections/devonmoubry-devchat' + id;
      //   let deleteSetting = {
      //     type: 'DELETE',
      //     url: url
      //   }
      //
      // $ajax(deleteSetting).then(function(data, status, xhr) {
      //   renderChat();
      // })
    }

    function renderLogin() {
    	const $usernameSubmit = $('#submitUsername');
    	$usernameSubmit.submit(function(event) {
    		event.preventDefault();
    		session = new Session(event.currentTarget[0].value);
        $('#loginContainer').hide();;
        $('#chatContainer').show();
    		console.log(session);
    	});
    }

    function renderChat() {
      // let settings = {
      //   type: 'GET',
      //   dataType: 'json',
      //   url: 'http://tiny-za-server.herokuapp.com/collections/devonmoubry-devchat'
      // }
      //
      // $.ajax(settings).then(function(data, status, xhr){
      //   data.forEach(function(sender, body, timestamp) {
      //     $('ul').append('<li><div class="sender"> + "Devon" + </div><div class="body"> + "Hello there" + </div><div class="timestamp"> + "beer o’clock" + </div><a id="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></a></li>');
      //   })
      // })
      //
      // $('a').on('click', function(event) {
      //   message.delete();
      // });

    }

    function renderMessages() {
      // $('#sendMessage').submit(function(event) {
      //   event.preventDefault;
      //   newMessage.save();
      // })
      // $.ajax(settings).then(function(data, status, xhr) {
      //   renderChat();
      // })
    }

    renderLogin();
}

// http://tiny-za-server.herokuapp.com/collections/devonmoubry-devchat
