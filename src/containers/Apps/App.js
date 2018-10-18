import React, {PropTypes}  from 'react';
//import PropTypes from 'prop-types';
//import {Switch, Router} from 'react-router-dom';
//import router from '../../router';
import '../../styles/App.css';
//import Home from '../Home/Home';



const App = ({children}) => (
    
       <main>
            {children}
       </main>
       
);

App.propTypes = {
    children: PropTypes.node.isRequired,
};

export default App; 