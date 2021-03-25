import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router';

import HomePage from './components/homePage';

class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/' component={ HomePage }/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    };
}

ReactDOM.render(<App />, document.getElementById('app'));