import './App.css';
import React from 'react'
import { Content, Header, Detail, Order } from './components';
import { Route } from 'react-router-dom';


function App() {

  

  return (
    <div className="App">
      <Header/>
      <Route exact path = '/' render = {() => <Content />}/>
      <Route exact path = '/product/:productID' render = {() => <Detail /> }/>
      <Route exact path = '/order' render = {() => <Order /> }/>
      

      
    </div>
  );
}

export default App;
