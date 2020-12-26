import './App.css';
import Customer from './component/customer.js';
import React, { Component } from 'react';
import Product from './component/product';
import Transaction from './component/transaction';
import FileUpload from './component/FileUpload';
class App extends Component{
  render(){
    return (
      <div>

          <h1>Insert Infomation</h1>
             <Customer/>
             <hr/>
             <Transaction/>
             <hr/>
             <Product/>
             <hr/>
             <FileUpload/>
             <hr/>

      </div>
    );
  }
}

export default App;
