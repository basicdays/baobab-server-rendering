import {join} from 'path';

import 'babel-polyfill';
import express from 'express';
import 'source-map-support';


import routes from './routes/index';

let app = express();

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers
app.use(function(err, req, res) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: err
	});
});

export {
	app as default
};
