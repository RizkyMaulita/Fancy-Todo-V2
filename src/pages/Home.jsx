import axios from '../config/axiosinstance'
import React, {Component} from 'react'
import Todo from '../components/Todo.jsx'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: []
    }
  }
  componentDidMount () {
    this.fetchTodo()
  }

  fetchTodo () {
    axios({
      url: '/todos',
      method: 'GET',
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(({ data }) => {
        this.setState({
          ...this.state,
          todos: data.data
        })
        console.log(this.state.todos)
      })
      .catch(err => {
        console.log(err)
      })
  }
  editTodo (id) {
    this.props.history.push(`/todos/${id}`)
  }
  render () {
    return (
      <div>
        <div className="container">
          <div className="container row cols-md-2">
            <div className="col-9 cols-sm-12 my-3">
              <div className="card">
                <div className="card-header text-center">
                  <h5>Your Todo List</h5>
                </div>
                <button className="btn btn-create mx-auto my-2"> Create New Todo</button>
                {/* ---- harus ada form disini ---- */}
                <div className="card-body row row-cols-1 row-cols-md-2">
                  {/* --- Loop Data --- */}
                  {this.state.todos.map((e) => (
                   <Todo key={e.id} todo={e} fetchTodo={() => this.fetchTodo()} editTodo={(id) =>this.editTodo(id)}></Todo> 
                  ))}
                </div>
              </div>
            </div>
            <div className="col-3 my-3 cols-sm-6">
              <div className="card">
                <div className="card-header text-center"> <h5 className="text-center">Quote of the Day</h5> </div>
                <div className="card-body">
                  <p><i>"Quote hari ini...."</i></p>
                  <p className="d-flex justify-content-end"> <i>'-- Author --'</i> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}