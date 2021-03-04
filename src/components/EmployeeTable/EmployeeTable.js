import React from "react";

function EmployeeTable(props) {
    return (
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th scope="col"><button
                type="button"
                onClick={() => props.sortFirstName()}>First Name:</button></th>
                <th scope="col"><button
                type="button"
                onClick={() => props.sortLastName()}>Last:</button></th>
                <th scope="col"><button
                type="button"
                onClick={() => props.sortOccupation()}>Occupation:</button></th>
                <th scope="col"><button
                type="button"
                onClick={() => props.sortLocation()}>Location:</button></th>
                
            </tr>
        </thead>
        <tbody>
            {props.data.map(info => (
            <tr>
            <td>{info.firstName}</td>
            <td>{info.lastName}</td>
            <td>{info.occupation}</td>
            <td>{info.location}</td>
            
        </tr>
            ))}
            
        </tbody>
    </table>
    )

}

export default EmployeeTable;