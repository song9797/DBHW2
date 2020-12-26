import { render } from "@testing-library/react";
import React from 'react';
import Axios, {post} from 'axios';

class Transaction extends React.Component{
	state ={
		Type:"T",
		TransactionNumber:"",
		ProductID:"",
		Price:"",
		Date:"",
		CustomerName:""
	}
	handleFormSbmit=(e)=>{
		e.preventDefault();
		Axios({
			method:'post',
			url:'/api/InsertTransaction',
			data:{
				Type: this.state.Type,
				TransactionNumber: this.state.TransactionNumber,
				ProductID: this.state.ProductID,
				Price: this.state.Price,
				Date: this.state.Date,
				CustomerName: this.state.CustomerName
			}
		})
		.then((response)=>{

		})
		this.setState({
			TransactionNumber:"",
			ProductID:"",
			Price:"",
			Date:"",
			CustomerName:""
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
				<h1>Insert Transaction Infomation</h1>
                Transaction Number: <input type = "text"  name = "TransactionNumber" 
                                    value={this.state.TransactionNumber} 
                                    onChange={this.handleValueChange} required/><br/>
				ProductID: <input type = "number" name="ProductID" value={this.state.ProductID}onChange={this.handleValueChange}required/><br/>
				Price : <input type ="number" name="Price" value={this.state.Price}onChange={this.handleValueChange} required/><br/>
				Date: <input type ="date" name = "Date" value={this.state.Date} 
						onChange={this.handleValueChange} required/><br/>
                Customer Name : <input type = "text"  name = "CustomerName" 
                                value ={this.state.CustomerName}onChange={this.handleValueChange}required/><br/>
           
                    <input type = "submit" value = "submit"/>
                    <input type = "reset" value = "reset"/><br></br>
				</form>
				{/* </fieldset> */}
                </div>
			)
		}
}
export default Transaction;