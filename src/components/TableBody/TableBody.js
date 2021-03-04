import React from "react";

function TableBody(props) {
    let employee = props.employee;
    return (
        <tr>
            {Object.keys(employee).map((key) => (
                <td>{employee[key]}</td>
            ))}
        </tr>
    )
}

export default TableBody;