import React from 'react';
import './App.css';
import Header from './Header';
import Diary from './Diary';
import Tips from './Tips';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="content">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Diary />
          </Route>
          <Route path="/tips">
            <Tips />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
