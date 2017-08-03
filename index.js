/**
 * Created by lcom81_two on 8/1/2017.
 */

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const keys = require('./config/key');
require('./models/user');
require('./services/passport');
const passport = require('passport');

const cookieSession = require('cookie-session');

mongoose.connect(keys.mongoURI);

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000
		,keys: [ keys.cookieKey ]
	})
);

app.use(passport.initialize());
app.use(passport.session());

//im
//const authRoutes = require('./routes/authRoutes');


//rought handler
//'/' is specific router portion of handler
// app.get('/',(req,res)=>{
//     res.send({hi: 'Helloo'})
// });

// passport.use(new GoogleStrategy({
// 		clientID: keys.googleClientID
// 		,clientSecret: keys.googleClientSecret
// 		,callbackURL: '/auth/google/callback'
// 	},
// 	(accessToken, refreshToken, profile, done) => {
// 		console.log('accessToken',accessToken);
// 		console.log('refreshToken',refreshToken);
// 		console.log('profile:',profile);
// 	})
// );

// passport.authenticate('which strategy is to be use by the passport means some code will be exicuted by google when apply oauth',{
// 		scope: 'Specipz the google server what component which we can access example profile details and email address'
// // 	})
// app.get(
// 	'/auth/google', 
// 	passport.authenticate('google',{
// 		scope: ['profile','email']
// 	})
// );

// app.get('/auth/google/callback', passport.authenticate('google'));

//calling authRoutes => old version 
	//authRoutes(app);
//calling authRoutes => new version 
	require('./routes/authRoutes')(app);

//const PORT = process.env.PORT; heroku dynamic port access
const PORT = process.env.PORT || 3001;
app.listen(PORT);