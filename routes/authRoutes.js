const passport = require('passport');

module.exports= app =>{

//app.get => Express object
//have to change express object
	app.get(
		'/auth/google', 
		passport.authenticate('google',{
			scope: ['profile','email']
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'));

	app.get('/api/logout',( req , res ) => {
		req.logout();
		res.send(req.user);
	});

//req => incomming request & res => outgoing responce
	app.get('/api/current_user',( req , res ) => {
		res.send(req.user);
	});

};