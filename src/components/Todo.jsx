import React, { Component } from 'react';
import axios from '../config/axiosinstance'
class Todo extends Component {
  editTodo (e) {
    e.preventDefault()
    this.props.editTodo(this.props.todo.id)
  }
  changeStatus (e) {
    e.preventDefault()
    console.log(this.props, '<<<')
    axios({
      url: `/todos/${this.props.todo.id}`,
      method: 'PATCH',
      headers: {
        access_token: localStorage.getItem('access_token')
      },
      data: { status: 'done' }
    })
      .then(_ => {this.props.fetchTodo()})
      .catch(err => console.log(err))
  }
  deleteTodo (e) {
    e.preventDefault()
    axios({
      url:`/todos/${this.props.todo.id}`,
      method: 'DELETE',
      headers: {access_token: localStorage.getItem('access_token')}
    })
      .then(_ => {this.props.fetchTodo()})
      .catch(err => console.log(err))
  }
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
            <button className="btn btn-edit mx-1" onClick={(e) => this.editTodo(e)}> Edit </button>
            <button className="btn btn-done mx-1" onClick={(e) => this.changeStatus(e)}>Done</button>
            <button className="btn btn-danger mx-1" onClick={(e) => this.deleteTodo(e)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo
