export default function app() {
  let session;
	const moment = require('moment');
	 console.log(moment().format());
	// all your codes are belong to us

	const $usernameSubmit = $('.submitUsername');
	$usernameSubmit.submit(function(event) {
		event.preventDefault();
		session = new Session(event.target[0].value);
		console.log(session);
	});
}

// http://tiny-za-server.herokuapp.com/collections/devonmoubry-devchat
