import React from "react";

function TableBody(props) {
    return (
        <tr>
            <th>{props.name}</th>
            <th>{props.occupation}</th>
            <th>{props.location}</th>
            <th>{props.email}</th>
        </tr>
    )
}

export default TableBody;