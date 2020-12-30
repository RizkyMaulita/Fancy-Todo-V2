import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div className="col mb-4">
        <div className="card">
          <div className="card-body card-todo">
            <div className="card-title">
              <h5 className="text-center">{this.props.todo.title}</h5>
            </div>
            <table className="mt-3 table table-borderless">
              <tr>
                <th>Description</th>
                <td>{ this.props.todo.description}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>{ this.props.todo.status}</td>
              </tr>
              <tr>
                <th>Due Date</th>
                <td>{ this.props.todo.due_date}</td>
              </tr>
            </table>
          </div>
          <div className="card-footer mx-auto">
            <button className="btn btn-edit mx-1"> Edit </button>
            <button className="btn btn-done mx-1">Done</button>
            <button className="btn btn-danger mx-1">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo
