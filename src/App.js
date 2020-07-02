import React from 'react';
import 'assets/css/style.css';
import { Switch, Route } from 'react-router-dom'

import HomePage from 'scenes/HomePage';
import FeaturePage from "scenes/FeaturePage";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/feature">
                    <FeaturePage />
          </Route>
        
          <Route path="/">
                    <HomePage />
          </Route>
       </Switch>
     
    </div>
  );
}

export default App;
