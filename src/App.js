import React from "react";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable"
import data from "./data/employees.json";

function App() {
  return (
    <div>
    <h1> Hello World! </h1>
    <EmployeeTable data={data} />;
    </div>
    
  )
}
export default App;