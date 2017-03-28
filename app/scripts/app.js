export default function app() {
    let session;
    let username;
  	const moment = require('moment');
  	 console.log(moment().format());
  	// all your codes are belong to us
    function Session(username) {
      'use strict';

      this.username = username;
    }

    function Message (sender, body, timestamp) {
      'use strict'

      this.sender = sender;
      this.body = body;
      this.timestamp = timestamp;
    }

    Message.prototype.save = function() {

    }

    Message.prototype.delete = function() {

    }

    function renderLogin() {
    	const $usernameSubmit = $('.submitUsername');
    	$usernameSubmit.submit(function(event) {
    		event.preventDefault();
        username = event.target[0].value;
    		session = new Session(username);

    		console.log(session);

    	});
    }

    function renderChat() {
      //$('.loginContainer').remove();
      //
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
    }

    function renderMessage() {

    }
  renderLogin();
}

// http://tiny-za-server.herokuapp.com/collections/devonmoubry-devchat
