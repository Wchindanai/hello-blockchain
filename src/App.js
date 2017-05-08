import React, { Component } from 'react';
import {
    BrowserRouter,
    Route, Switch

} from 'react-router-dom'
import Home from './home/home';
import Landing from './landing/landing';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/landing'} component={Landing}/>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
