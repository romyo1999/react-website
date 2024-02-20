import React from 'react';
import './App.css';
import NavBar from './main/nav';
import NavFooter from './main/navFooter';
import Items from './main/items';
// import { BrowserRouter,Route } from 'react-router-dom';
// import Stickers from './main/stickers';
// import Design from './main/design';
// import Login from './main/Login';

function App(){
  return(

    
    <div>
      <NavBar />  
      <Items />    
      <NavFooter />
    </div>

  )
}

export default App;