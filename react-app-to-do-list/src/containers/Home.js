import React, { Component } from "react";
import StartDialog from './StartDialog';
import AddTaskDialog from "./AddTaskDialog";
import { TableTasks } from "./TableTasks";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  // Handlers
  handleSubmit = (submission) =>{
    this.setState({
    data: [...this.state.data, submission]
 })
}
  // Delete row from table
  handleDelete = (index) => {
    var array = this.state.data.slice();
    array.splice(index, 1)
    this.setState({ data: array });
  }

  // Edit row from table
  handleEdit = (e) => {
    alert('edit your task')
  }

render() {
    return (
      <div>
        <StartDialog />
        <AddTaskDialog onSubmit={this.handleSubmit} />
        <TableTasks handleDelete={this.handleDelete} handleEdit={this.handleEdit} data={this.state.data} 
        header={[{ name: "No"}, { name: "Task" }, { name: "Deadline" }, {name: "Timer"}, { name: "Priority" }, { name: "Edit" }, { name: "Delete" }]} />
      </div>
    );
  }}

export default Home;