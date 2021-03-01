import React, { Component } from "react";
import TableBody from "../TableBody/TableBody"
import employees from "../../employees.json";

class TableHeader extends Component {
    state = {
        employees
    };
    render(){
    return(
        <table>
            <tr>
                <th> Name: </th>
                <th> Occupation: </th>
                <th> Location: </th>
                <th> Email: </th>
            </tr>
            {this.state.employees.map(employee => (
             <TableBody
             name={employee.name}
             occupation={employee.occupation}
             location={employee.location}
             email={employee.email}
             />   
            ))}
        </table>
    )}
}

export default TableHeader;