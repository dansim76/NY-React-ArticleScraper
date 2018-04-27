import React from 'react';
import Home from "./pages/Home"
import Saved from "./pages/Saved"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



const App = ()=>(
<Router>
  <div>
    <Switch>
    <Route path="/" component = {Home} />
    <Route path="/Saved" component = {Saved} />
  </Switch>
  </div>
</Router>
)

export default App;
