import React from "react";

function EmployeeTable(props) {
    return (
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Occupation</th>
                <th scope="col">Location</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map(info => (
            <tr>
            <td>{info.name}</td>
            <td>{info.occupation}</td>
            <td>{info.location}</td>
            <td>{info.email}</td>
        </tr>
            ))}
            
        </tbody>
    </table>
    )

}

export default EmployeeTable;