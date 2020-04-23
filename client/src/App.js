import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import TodoList from './components/TodoList.js';

import './App.css';

class App extends Component {
  render () {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={TodoList}/>
      </Switch>
    
    </div>
  );
}
}

export default App;
