import React, { Component } from "react";
import employees from "../../employees.json";

class Table extends Component {
    state = {
        employees
    };

    render(){
    return(
        <table className="table">
            <thead class="thead-dark">
            <tr>
                <th scope="col"><button type="button" onClick="">Name:</button></th>
                <th scope="col"><button type="button" onClick="{}">Occupation</button></th>
                <th scope="col"><button type="button" onClick="">Location</button></th>
                <th scope="col"><button type="button" onClick="{()}">Email</button></th>
            </tr>
            </thead>
            {this.state.employees.map(employee => (
             <tbody>
             <tr>
                 
                 <th>{employee.name}</th>
                 <th>{employee.occupation}</th>
                 <th>{employee.location}</th>
                 <th>{employee.email}</th>
             </tr>
             </tbody>  
            ))}
        </table>
    )}
}

export default Table;