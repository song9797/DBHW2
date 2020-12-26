import React from 'react';
class customerlist extends React.Component {
    render() {
        return(
        <TableRow>
            <TableCell>{this.props.Type}</TableCell>
            <TableCell>{this.props.Name}</TableCell>
            <TableCell>{this.props.Phone}</TableCell>
            <TableCell>{this.props.Address}</TableCell>
            <TableCell>{this.props.Gender}</TableCell>
        </TableRow>
        )
    }
}
export default customerlist;