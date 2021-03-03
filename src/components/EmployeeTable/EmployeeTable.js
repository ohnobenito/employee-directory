import React from "react";

function EmployeeTable(props) {
    return (
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col"><button
                type="button"
                onClick={() => props.sortName()}>Name:</button></th>
                <th scope="col"><button
                type="button"
                onClick={() => props.sortOccupation()}>Occupation:</button></th>
                <th scope="col"><button
                type="button"
                onClick={() => props.sortLocation()}>Location:</button></th>
                <th scope="col"><button
                type="button"
                onClick={() => props.sortEmail()}>Email Address:</button></th>
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