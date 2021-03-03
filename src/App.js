import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable"
//import Table from "./components/TestTable";
import data from "./data/employees.json";

class App extends Component {
  state = {
    data
  };
  
  //Sort Functions
  sortName = () => {
    let data = this.state.data.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({data});
  };
  sortOccupation = () => {
    let data = this.state.data.sort((a, b) => (a.occupation > b.occupation) ? 1 : -1)
    this.setState({data});
  };
  sortLocation = () => {
    let data = this.state.data.sort((a, b) => (a.location > b.location) ? 1 : -1)
    this.setState({data});
  };
  sortEmail = () => {
    let data = this.state.data.sort((a, b) => (a.email > b.email) ? 1 : -1)
    this.setState({data});
  };

  render() {
    return (
      <div>
      <h1> Hello World! </h1>
      <EmployeeTable 
      data={data}
      sortName={this.sortName}
      sortOccupation={this.sortOccupation}
      sortLocation={this.sortLocation}
      sortEmail={this.sortEmail}/>
      </div>
      
    )
  }
  
}
export default App;