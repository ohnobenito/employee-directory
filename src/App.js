import React, { Component } from "react";
import data from "./data/employees.json";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import InputField from "./components/InputField/InputField";


class App extends Component {
  state = {
    data,
    occupation: "",
    original: data
  };
  
  //Sort Functions
  sortFirstName = () => {
    let data = this.state.data.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1)
    this.setState({data});
  };
  sortLastName = () => {
    let data = this.state.data.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1)
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
  

  render() {
    return (
      <div>
      <h1> Hello World! </h1>
      <InputField />
      <EmployeeTable 
      data={data}
      sortFirstName={this.sortFirstName}
      sortLastName={this.sortLastName}
      sortOccupation={this.sortOccupation}
      sortLocation={this.sortLocation}
      />
      </div>
      
    )
  }
  
}
export default App;