// import axios from '../config/axiosinstance'
import React, {Component} from 'react'
import Todo from '../components/Todo.jsx'
import CreateTodo from '../components/CreateTodo.jsx'
import {connect} from 'react-redux'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // todos: [],
      statusCreateTodo: false
    }
  }
  componentDidMount () {
    // this.fetchTodo()
    this.props.getAllTodos()
  }

  // fetchTodo () {
  //   axios({
  //     url: '/todos',
  //     method: 'GET',
  //     headers: {
  //       access_token: localStorage.getItem('access_token')
  //     }
  //   })
  //     .then(({ data }) => {
  //       this.setState({
  //         ...this.state,
  //         todos: data.data
  //       })
  //       console.log(this.state.todos)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
  editTodo (id) {
    this.props.history.push(`/todos/${id}`)
  }

  createTodo (e) {
    e.preventDefault()
    const status = this.state.statusCreateTodo
    this.setState({
      ...this.state,
      statusCreateTodo: !status })
  }

  render () {
    return (
      <div>
        <div className="container">
          <div className="container row cols-md-2">
            <div className="col-12 cols-sm-12 my-3">
              <div className="card">
                <div className="card-header text-center">
                  <h2>Your Todo List</h2>
                </div>
                <button className="btn btn-create mx-auto mt-3 mb-2" onClick={(e) => this.createTodo(e)}> Create New Todo</button>
                {/* ---- harus ada form disini ---- */}
                {this.state.statusCreateTodo && 
                  <CreateTodo fetchTodo={() => this.props.getAllTodos()} status={() => this.setState({
                    ...this.state,
                    statusCreateTodo: false
                  })}></CreateTodo>
                }
                <div className="card-body row row-cols-1 row-cols-md-3">
                  {/* --- Loop Data --- */}
                  {this.props.dataTodos.map((e) => (
                   <Todo key={e.id} todo={e} fetchTodo={() => this.props.getAllTodos()} editTodo={(id) =>this.editTodo(id)}></Todo> 
                  ))}
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dataTodos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTodo: (payload) => dispatch({type: 'SET_TODOS', payload}),
    getAllTodos: () => dispatch({type: 'FETCH_TODOS'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)