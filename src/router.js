//import {Route, IndexRoute, Redirect} from 'react-router';
//import App from './containers/Apps/App';

import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Page404 from '../src/containers/Page404/Page404';
import Home from './containers/Home/Home';
import ByUserName from './containers/ByUserName/ByUserName';

const Router = () => {
    return (
        <div>
            {/* <NavLink to="/">Accueil</NavLink>
            <NavLink to="/Post">Post</NavLink> */}
             <Switch>
                <Route path = "/" exact component = {Home} />
                <Route path="tweets/:username" component={ByUserName}/>
                <Route path = "/404"  component = {Page404} />
                <Redirect to ="/404"/> 
             </Switch>
        </div>
    );
};

export default Router;
// export default (
//     <Route path="/" component={App} >
//         <IndexRoute component={Home} />
//         <Route path="404" component={Page404} />
//         <Redirect from="*" to="404" />
//     </Route>
// );