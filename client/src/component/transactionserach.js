import React from 'react';
import Axios from 'axios';

/*
const styles = theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }
  });

class TransactionSearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            key:'',
            value:''
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        Axios({
            method:'post',
            url:'/api/transaction',
            data:{
                key : this.state.key,
                value : this.state.value
            }
        })
        .then((response) => {
            console.log(response.data);
            this.props.stateRefresh();
        })
        .catch((err) => {
            console.log(err);
        })
        
        this.setState({
            value:''
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        console.log(e.target);
        this.setState(nextState);
    }
    handleKeyChange = (e) =>{
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        console.log(e.target);
        this.setState(nextState); 
    }

    render() {
        return (
            <div>
                
                <Select
                name="key"
                onChange={this.handleKeyChange}
                
                >
                <Select >
                <option value="TransactionNumber">TransactionNumber</option>
                <option value="ProductID">ProductID</option>
                <option value="Price">Price</option>
                <option value="Date">Date</option>
                <option value="CustomerName">CustomerName</option>
                </Select>
                <TextField variant="outlined" label="검색하기" type="text" color="white" name="value" value={this.state.value} onChange={this.handleValueChange}/>
                <Button value="submit" onClick={this.handleFormSubmit}>검색</Button>
                
            </div>
        )
    }
}

export default transactionsearch;*/