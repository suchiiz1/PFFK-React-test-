import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import Dashboard from './Dashboard';
import Note from './Note';
import Target from './Target';
import Setting from './Setting';
import How_to from './How_to';
import About_me from './About_me';
import Profile from './Profile';
import Re_password from './Re_password';

import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
    <App/>, 
        document.getElementById('Header')
);


ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/Note" component={Note}/>
            <Route path="/Target" component={Target}/>
            <Route path="/Setting" component={Setting}/>
            <Route path="/How_to" component={How_to}/>
            <Route path="/About_me" component={About_me}/>
            <Route path="/Profile" component={Profile}/>
            <Route path="/Re_password" component={Re_password}/>








        </div>
    </Router>,document.getElementById('Content')
);