import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import TasksList from './components/TasksList.js';

import './App.css';

class App extends Component {
  render () {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={TasksList}/>
      </Switch>
    
    </div>
  );
}
}

export default App;
