import React, { Component } from 'react';
import './AddTaskDialog.css';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
export default class AddTaskDialog extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "High", textFieldValue: '', controlledDate: {} };
    this.handleDate = this.handleDate.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.handleChangeSelectField = this.handleChangeSelectField.bind(this);
  }


  handleTextFieldChange = (e) =>{
    this.setState({
        textFieldValue: e.target.value,
    });
}

  handleDate = (event, date) => {
      this.setState({
        date: date
      })
  }

  handleChangeSelectField = (event, index, value) => {
      this.setState(
        {value}
      );
  }

  handleChangeDate = (event, date) => {
    this.setState({
      controlledDate: date,
    });
  };

  render() {
    return (
      <div>
        <Dialog title="Add new task" actions={this.props.actions} modal={false} open={this.props.open} >
          <TextField hintText="Name" value={this.state.textFieldValue} onChange={this.handleTextFieldChange} />
          <DatePicker hintText="Deadline" value={this.state.controlledDate} onChange={this.handleChangeDate}/>
          <SelectField floatingLabelText="Priority" value={this.state.value} onChange={this.handleChangeSelectField} >
            <MenuItem value="High" primaryText="High" />
            <MenuItem value="Medium" primaryText="Medium" />
            <MenuItem value="Low" primaryText="Low" />
        </SelectField>
        </Dialog>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>No</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Deadline</TableHeaderColumn>
              <TableHeaderColumn>Timer</TableHeaderColumn>
              <TableHeaderColumn>Priority</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>{this.state.textFieldValue}</TableRowColumn>
              <TableRowColumn>Data</TableRowColumn>
              <TableRowColumn>Timer</TableRowColumn>
              <TableRowColumn>{this.state.value}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}