import React, { useState } from "react";

function InputField(props) {
    const [inputVal, setInputVal] = useState();
  
    

     const handleInputChange = (e) => {  
         setInputVal(
            e.target.value
         )
         console.log(inputVal);
         let lowerVal = e.target.value.toLowerCase();
         let newArr = props.data.filter(employee => employee.firstName.toLowerCase().indexOf(lowerVal) !== -1 );
         props.setFilter(newArr);
        } 
    
    return (
        <form className ="search">
        <div className="form-group">
            <label htmlFor="employee">Filter for First Name:</label>
            <input
            onChange={(e)=> handleInputChange(e)}
            name="employee"
            list="employees"
            type="text"
            className="form-control"
            placeholder="Type in an employee name to begin"
            id="id"
           
            />
            
           
        </div> 
    </form>
);
}


export default InputField;