import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import App from '../src/containers/Apps/App';

import './styles/index.css';
//import Router from './router';
//import App from './containers/Apps/App';
import Router from './router';


render(
        <BrowserRouter>
                <Router />
        </BrowserRouter>,
        document.getElementById('root')
       
    );

