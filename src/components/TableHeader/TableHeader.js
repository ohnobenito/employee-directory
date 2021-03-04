import React from "react";

function TableHeader(props) {
    return (
        <thead>
            <tr>
            <th scope="col"><button
                type="button"
                onClick={() => props.sortID()}>ID:</button></th>
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
    )
}

export default TableHeader;