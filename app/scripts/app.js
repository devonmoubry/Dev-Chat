export default function app() {
  let session;
	var moment = require('moment');
	 console.log(moment().format());
	// all your codes are belong to us
	function Session(username) {
		'use strict';

		this.username = username;
	}

	const $usernameSubmit = $('.submitUsername');
	$usernameSubmit.submit(function(event) {
		event.preventDefault();
		session = new Session(event.target[0].value);
		console.log(session);
	});

	console.log('tiy is awesome!')
}

// http://tiny-za-server.herokuapp.com/collections/devonmoubry-devchat
