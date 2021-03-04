import React from "react";

function TableHeader(props) {
    return (
        <thead className="thead-dark">
            <tr>
            <th scope="col"><button
                type="button" className="btn btn-info"
                onClick={() => props.sortID()}>ID:</button></th>
                <th scope="col"><button
                type="button" className="btn btn-info"
                onClick={() => props.sortFirstName()}>First Name:</button></th>
                <th scope="col"><button
                type="button" className="btn btn-info"
                onClick={() => props.sortLastName()}>Last Name:</button></th>
                <th scope="col"><button
                type="button" className="btn btn-info"
                onClick={() => props.sortOccupation()}>Occupation:</button></th>
                <th scope="col"><button
                type="button" className="btn btn-info"
                onClick={() => props.sortLocation()}>Location:</button></th>
                
            </tr>
            </thead>
    )
}

export default TableHeader;