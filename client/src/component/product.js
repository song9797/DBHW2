import { render } from "@testing-library/react";
import React from 'react';
import Axios, {post} from 'axios';

class Product extends React.Component{
	state ={
		Type:"P",
		ProductName:"",
		ProductID:"",
		SupplierName:""
	}
	handleFormSbmit=(e)=>{
		e.preventDefault();
		Axios({
			method:'post',
			url:'/api/InsertProduct',
			data:{
				Type: this.state.Type,
				ProductName: this.state.ProductName,
				ProductID: this.state.ProductID,
				SupplierName: this.state.SupplierName,
			}
		})
		.then((response)=>{

		})
		this.setState({
			ProductName:"",
			ProductID:"",
			SupplierName:""
		})
	}
	handleValueChange =(e)=>{
		let nextState ={};
		nextState[e.target.name]=e.target.value;
		this.setState(nextState);
	}
	render(){
		return (
                <div>
				{/* <fieldset style="width: 220"> */}
				<form onSubmit={this.handleFormSbmit}>
				<h1>Insert Product Infomation</h1>
				ProductName: <input type = "text"  name = "ProductName" value={this.state.ProductName} 
						onChange={this.handleValueChange} required/><br/>
                ProductID: <input type = "number" name="ProductID" value={this.state.ProductID}onChange={this.handleValueChange}required/><br/>
                SupplierName : <input type ="text" name= "SupplierName" 
                        value={this.state.SupplierName}onChange={this.handleValueChange}required/><br/>
                        <input type = "submit" value = "submit"/>
                        <input type = "reset" value = "reset"/><br/>
				</form>
				{/* </fieldset> */}
                </div>
			)
		}
}
export default Product;