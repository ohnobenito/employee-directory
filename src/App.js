import './App.css';
import React, { Component } from "react";
import EmployeeTable from "./components/TableHeader/TableHeader";
import employees from "./employees.json";

class App extends Component {
  //Setting the State
  state = {
    employees
  };
  render() {
    return (
      <div>
        <EmployeeTable />
      </div>
    )
  }
  
}

export default App;
