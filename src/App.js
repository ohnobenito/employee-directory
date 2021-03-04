import React, { Component } from "react";
import employees from "./data/employees.json";
import NavBar from "./components/NavBar/NavBar"
//import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import TableHeader from "./components/TableHeader/TableHeader";
import TableBody from "./components/TableBody/TableBody";


class App extends Component {
  state = {
    employees,
    location: "",
    original: employees
  };
 
  //Filter Search -> Add all fields to be filtered
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]:value});
    const newLocation = this.state.original.filter((employee) => {
      return employee.location.toLowerCase().includes(value.toLowerCase());
    });
    this.setState({employees: newLocation});
  };

  //Sort Functions -> Condense down to one sorting function in the future
  sortID= () => {
    let employees = this.state.employees.sort((a, b) => (a.id > b.id) ? 1 : -1)
    this.setState({employees});
  };
  sortFirstName = () => {
    let employees = this.state.employees.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1)
    this.setState({employees});
  };
  sortLastName = () => {
    let employees = this.state.employees.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1)
    this.setState({employees});
  };
  sortOccupation = () => {
    let employees = this.state.employees.sort((a, b) => (a.occupation > b.occupation) ? 1 : -1)
    this.setState({employees});
  };
  sortLocation = () => {
    let employees = this.state.employees.sort((a, b) => (a.location > b.location) ? 1 : -1)
    this.setState({employees});
  };
  

  render() {
    return (
      <div>
      <NavBar 
      location={this.state.location}
      handleInputChange={this.handleInputChange} />
      <table className="table table-sm table-striped">
      <TableHeader 
      employee={employees}
      sortID={this.sortID}
      sortFirstName={this.sortFirstName}
      sortLastName={this.sortLastName}
      sortOccupation={this.sortOccupation}
      sortLocation={this.sortLocation}/>
      <tbody>
        {this.state.employees.map((employee) => (
          <TableBody employee={employee} />
        ))}
      </tbody>
      </table>
      </div>
      
    )
  }
  
}
export default App;