import React from 'react';
import { Route, Redirect } from 'react-router';
import HomePage from 'pages/HomePage'

export default () => (
    <Route>
        <Route path="*" component={HomePage}/>
    </Route>
)