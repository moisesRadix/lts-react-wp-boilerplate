const express = require('express');
const favicon = require('express-favicon');
var http = require('http');
var enforce = require('express-sslify');
var helmet = require('helmet');
// var expressStaticGzip = require("compression");
var expressStaticGzip = require('express-static-gzip');
require('dotenv').config();

const path = require('path');
const { isEmpty } = require('lodash');
const port = process.env.PORT || 3000;
const directives = JSON.parse(
	process.env.REACT_APP_DIRECTIVES ? process.env.REACT_APP_DIRECTIVES : '{}',
);
if (isEmpty(directives)) {
	console.error('SECURITY ERROR WARNING: ENV VAR DIRECTIVES IS EMPTY!');
}
//const domain_api = process.env.DOMAIN_API || `localhost:${port}/graphql`
const app = express();
app.use(
	expressStaticGzip(path.join(__dirname, 'build'), {
		enableBrotli: false, // only if you have brotli files too
	}),
);

try {
	if (process.env.NODE_ENV === 'production') {
		// console.log('is in prod!');
		app.use(enforce.HTTPS({ trustProtoHeader: true }));
		app.use(helmet());
		app.use(
			helmet.contentSecurityPolicy({
				directives: {
					...directives,
					// defaultSrc: [
					//   "'self'",
					//   "https://js.stripe.com",
					//   "https://secure.gravatar.com",
					//   "https://drive.google.com/",
					// ],
					// styleSrc: [
					//   "'self'",
					//   "'unsafe-inline'",
					//   "text/html",
					//   "https://maxcdn.bootstrapcdn.com",
					//   "https://fonts.googleapis.com",
					//   "https://fonts.gstatic.com",
					//   "https://maxcdn.bootstrapcdn.com/",
					// ],
					// fontSrc: [
					//   "'self'",
					//   "https://fonts.googleapis.com",
					//   "https://fonts.gstatic.com",
					//   "data:",
					//   "https://maxcdn.bootstrapcdn.com",
					//   "https://maxcdn.bootstrapcdn.com/",
					// ],
					// scriptSrc: [
					//   "'self'",
					//   "text/html",
					//   "https://www.googletagmanager.com",
					//   "https://js.stripe.com",
					//   "https://secure.gravatar.com",
					// ],
					// connectSrc: [
					//   "'self'",
					//   "https://radix-haven-client-demo.herokuapp.com/",
					//   "https://radix-haven-backend-demo.herokuapp.com/",
					//   "https://js.stripe.com",
					//   "https://radix-haven-sync-demo.herokuapp.com",
					//   "https://secure.gravatar.com",
					//   "https://sync.api.radixhaven.com",
					//   "https://admin.api.radixhaven.com",
					//   "https://stripe.api.radixhaven.com",
					//   "https://sync2.api.radixhaven.com",
					//   "https://admin2.api.radixhaven.com",
					//   "https://stripe2.api.radixhaven.com",
					//   "https://rh-api-stripe.herokuapp.com",
					//   "https://rh-api-admin.herokuapp.com",
					//   "https://rh-api-sync.herokuapp.com",
					// ],
					// imgSrc: [
					//   "'self'",
					//   "www.w3.org",
					//   "data:",
					//   "https://secure.gravatar.com/",
					//   "https://elcroquisdigital.com/",
					//   "https://blog.casadellibro.com/",
					//   "https://knowledgesociety.usal.es",
					//   "https://image.freepik.com",
					//   "https://thumbs.dreamstime.com/",
					//   "https://drive.google.com/",
					// ],
				},
			}),
		);
		app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
		app.use(
			helmet.featurePolicy({
				features: {
					fullscreen: ["'self'"],
					camera: ["'self'"],
					payment: ["'self'"],
					microphone: ["'self'"],
				},
			}),
		);
		app.use(helmet.noCache());
	}
} catch (error) {
	// console.log(error);
}
// app.use(
// 	expressStaticGzip({
// 		level: 6,
// 		threshold: 100 * 1000,
// 		filter: (req, res) => {
// 			if (req.headers['x-no-compression']) {
// 				return false;
// 			}
// 			return expressStaticGzip.filter(req, res);
// 		},
// 	}),
// );
app.use(favicon(path.join(__dirname, '/build/favicon.ico')));
// the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/build')));

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

http.createServer(app).listen(port);
