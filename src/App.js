import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import HomePage from './pages/homepage/homePage.js'
import shop from './pages/shop/shop';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={shop}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}


export default App;
