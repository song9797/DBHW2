import React from 'react';
class productlist extends React.Component {
    render() {
        return(
        <TableRow>
            <TableCell>{this.props.Type}</TableCell>
            <TableCell>{this.props.ProductName}</TableCell>
            <TableCell>{this.props.ProductID}</TableCell>
            <TableCell>{this.props.SupplierName}</TableCell>
        </TableRow>
        )
    }
}
export default productlist;