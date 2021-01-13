import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';

const Root = () => {
    return  (
        <div>
            <Route path = '/:root/:tableID' render = {() => <App />}/>
        </div>
    )
}

export default Root;