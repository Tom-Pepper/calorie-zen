import React from 'react';
import './App.css';
import Header from './Header';
import Diary from './Diary';
import Tips from "./Tips";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Diary />
        </Route>
        <Route path="/tips">
          <Tips />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
