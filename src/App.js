import './App.css';
import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import {withRouter, Route} from 'react-router-dom';

import { Content, Header, Detail, Order } from './components';
import { getDataProductsThunk, postOrderThunk,setSuccess } from './redux/data-reducer';

const map = new Map();
let sum = 0;

function App({ data, getDataProductsThunk, postOrderThunk, setSuccess, success, match}) {

  const [ products, setProducts ] = React.useState([]);
  const rootName = match.params.root;
  const rootTable = match.params.tableID;
  const BASE_URL = 'https://qr-menu-api.herokuapp.com';

  

  React.useEffect(() => {
    getDataProductsThunk(rootName)
  },[])

  if (data === null) {
    return <div></div>
  }

  const onRemoveProduct = (object, count) => {
    if (count === 1) {
      if (window.confirm('Do you really want to leave?')) {
        map.delete(object);
        sum -= object.price
        setProducts(Array.from(map))
      }
    }
    else {
      let count = map.get(object);
      count--;
      map.set(object, count);
      sum -= object.price

      setProducts(Array.from(map))
    }
    
  }

  const onAddProduct = (object, c = 1) => {
    if ( map.size <= 0 ) {
      map.set(object, c);
      sum += object.price;

      setProducts(Array.from(map))
    }
    else if (map.has(object)) {
      let count = map.get(object);
      count+= c;
      map.set(object, count);
      sum += object.price;

      setProducts(Array.from(map))
    }
    else {
      map.set(object, c);
      sum += object.price;
      
      setProducts(Array.from(map));
    }
  }
  

  return (
    <div className="App">
      <Header name = { data.cafe.name } products = { products } rootName = { rootName } rootTable = { rootTable } sum = { sum } onRemoveProduct = { onRemoveProduct } onAddProduct = { onAddProduct }/>
      <Route exact path = {`/${rootName}/${rootTable}`} render = {() => <Content data = { data } rootName = { rootName } BASE_URL = { BASE_URL } rootTable = { rootTable } onAddProduct = { onAddProduct } />}/>
      <Route exact path = {`/${rootName}/${rootTable}/product/:productID`} render = {() => <Detail data = { data.cafe } BASE_URL = { BASE_URL } onAddProduct = { onAddProduct }/> }/>
      <Route exact path = {`/${rootName}/${rootTable}/order`} render = {() => <Order products = { products } success = { success } sum = { sum } rootName = { rootName } rootTable = { rootTable } postOrderThunk = { postOrderThunk } setSuccess = { setSuccess }/>}/>
    </div>
  );
}
let mapStateToProps = (state) => {
  return {
    data: state.dataPage.cafe,
    success: state.dataPage.success
  }
}

export default compose(
  connect(mapStateToProps, { getDataProductsThunk, postOrderThunk, setSuccess }),
  withRouter
)(App);
