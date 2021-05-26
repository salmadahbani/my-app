import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Search, History } from "./components";



function App() {
  return (
    <div className="App">
      <Router>
        <Home/>
        <Switch>
          
          <Route path="/search" exact component={() => <Search />} />
          <Route path="/history" exact component={() => <History />} />
          
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
