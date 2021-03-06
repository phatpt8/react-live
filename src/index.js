import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import 'src/lib/index.js';

render(
    <Router history={browserHistory}>
        { routes() }
    </Router>,
    document.getElementById('root')
);