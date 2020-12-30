import React, {Component} from 'react'
import axios from '../config/axiosinstance'

export default class Edit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todo: {}
    }
  }

  componentDidMount () {
    this.getData()
  }

  getData () {
    axios({
      url: `/todos/${this.props.match.params.id}`,
      method: 'GET',
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(({data}) => {
        console.log(data)
        this.setState({
          ...this.state,
          todo: data.data
        })
      })
      .catch(err => console.log(err))
  }

  editTodo (e) {
    e.preventDefault()
    console.log(this.state.todo, "<<<< hasil edit")
    // this.props.history.push('/')
    axios({
      url: `/todos/${this.props.match.params.id}`,
      method: 'PUT',
      headers: {
        access_token: localStorage.getItem('access_token')
      },
      data: this.state.todo
    })
      .then(_ => {this.props.history.push('/')})
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    // const { match, location, history } = this.props;
    // console.log(match.params)
    return(
      <div className="container">
        {/* {this.state.todo.title}
        {this.state.todo.description}
        {this.state.todo.status}
        {this.state.todo.due_date}
        <br></br> */}
        <h1 className="text-center py-3">Edit Your Todo</h1>
        <form method="post">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={this.state.todo.title}
                onChange={(e) => this.setState({
                  ...this.state,
                  todo: {
                    ...this.state.todo,
                    title: e.target.value
                  }
                })}
              />
            </div>
          </div>
          <div className="form-group row mt-3">
            <label className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={this.state.todo.description}
                onChange={(e) => this.setState({
                  ...this.state,
                  todo: {
                    ...this.state.todo,
                    description: e.target.value
                  }
                })}/>
            </div>
          </div>
          <div className="form-group row mt-3">
            <label className="col-sm-2 col-form-label">Status</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={this.state.todo.status}
                onChange={(e) => this.setState({
                  ...this.state,
                  todo: {
                    ...this.state.todo,
                    status: e.target.value
                  }
                })}
              />
            </div>
          </div>
          <div className="form-group row mt-3">
            <label className="col-sm-2 col-form-label">Due Date</label>
            <div className="col-sm-10">
              <input type="date" className="form-control" value={this.state.todo.due_date}
                onChange={(e) => this.setState({
                  ...this.state,
                  todo: {
                    ...this.state.todo,
                    due_date: e.target.value
                  }
                })}
              />
            </div>
          </div>
          <div className="form-group row mt-3">
            <div className="d-flex justify-content-center">
              <button className="btn btn-update" type="submit" onClick={(e) => this.editTodo(e)}> Edit</button>
            </div>
          </div>
        </form> 
      </div>
    )
  }
}