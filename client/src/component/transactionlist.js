import React from 'react';

class transactionlist extends React.Component {
    render() {
        return(
        <TableRow>
            <TableCell>{this.props.Type}</TableCell>
            <TableCell>{this.props.TransactionNumber}</TableCell>
            <TableCell>{this.props.ProductID}</TableCell>
            <TableCell>{this.props.Price}</TableCell>
            <TableCell>{this.props.Date}</TableCell>
            <TableCell>{this.props.CustomerName}</TableCell>
        </TableRow>
        )
    }
}

export default transactionlist;