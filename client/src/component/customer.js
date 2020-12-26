import { render } from "@testing-library/react";
import React from 'react';
import Axios, {post} from 'axios';


class Customer extends React.Component{
	state ={
		Type:"C",
		Name:"",
		Phone:"",
		Address:"",
		Gender:""
	}
	handleFormSbmit=(e)=>{
		e.preventDefault();
		Axios({
			method:'post',
			url:'/api/InsertCustomer',
			data:{
				Type: this.state.Type,
				Name: this.state.Name,
				Phone: this.state.Phone,
				Address: this.state.Address,
				Gender: this.state.Gender
			}
		})
		.then((response)=>{
			
		})
		this.setState({
			Name:"",
			Phone:"",
			Address:"",
			Gender:""
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
				<h1>Insert Customer Infomation</h1>
				Name: <input type = "text"  name = "Name" value={this.state.Name} 
						onChange={this.handleValueChange} required/><br/>
				Phone: <input type = "tel" placeholder="010-1234-1234"
						pattern ="[0-9]{3}-[0-9]{4}-[0-9]{4}"  name ="Phone"
						value ={this.state.Phone} onChange={this.handleValueChange}/>
						<br/>
				Address : <input type ="text" name="Address" value = {this.state.Address} onChange={this.handleValueChange} required/><br/>
				Gender: <input type ="radio" name = "Gender" value="Male" 
						onChange={this.handleValueChange} required/>
						<label for="Male"></label>
						<input type ="radio" name = "Gender" value="Female" 
						onChange={this.handleValueChange} required/>
						<label for="Female"></label><br/>
						
						<input type = "submit" value = "submit"/>
                    	<input type = "reset" value = "reset"/><br/>
				</form>
				{/* </fieldset> */}
				</div>
			)
		}
}

export default Customer;