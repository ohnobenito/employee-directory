import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable"
//import Table from "./components/TestTable";
import data from "./data/employees.json";

class App extends Component {
  state = {
    data
  };
  
  //Sort Function
  sortName = () => {
    let data = this.state.data.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({data});
  };

  render() {
    return (
      <div>
      <h1> Hello World! </h1>
      <EmployeeTable 
      data={data}
      sortName={this.sortName}/>
      </div>
      
    )
  }
  
}
export default App;