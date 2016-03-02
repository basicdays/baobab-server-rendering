import Baobab from 'baobab';
import {root} from 'baobab-react/higher-order';
import {Router} from 'express';
import React, {Component} from 'react';
import {renderToString} from 'react-dom/server';


class Stuff extends Component {
	render() {
		return (
			<h1>Woo!</h1>
		);
	}
}


let router = new Router();

router.get('/*', (req, res, next) => {
	try {
		let App = root(<Stuff/>, new Baobab());
		let content = renderToString(<App/>);
		res.render('index', {content});
	} catch (err) {
		next(err);
	}
});

module.exports = router;
