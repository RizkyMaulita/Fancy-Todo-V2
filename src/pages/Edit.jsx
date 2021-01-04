import React, {Component} from 'react'
import axios from '../config/axiosinstance'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Edit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      status: '',
      due_date: ''
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
        this.setState({ title: data.data.title })
        this.setState({ description: data.data.description })
        this.setState({ status: data.data.status })
        this.setState({ due_date: data.data.due_date })
      })
      .catch(err => console.log(err))
  }

  editTodo (e) {
    e.preventDefault()
    const payload = {
      title: this.state.title,
      description: this.state.description,
      status: this.state.status,
      due_date: this.state.due_date
    }
    axios({
      url: `/todos/${this.props.match.params.id}`,
      method: 'PUT',
      headers: {
        access_token: localStorage.getItem('access_token')
      },
      data: payload
    })
      .then(_ => {this.props.history.push('/')})
      .catch(err => {
        if(err) {
          err.response.data.messages.map(e => toast.error(e.message, { position: 'top-center' }))
        }
      })
  }

  render() {
    return(
      <div className="container">
        <ToastContainer />
        <h1 className="text-center py-3">Edit Your Todo</h1>
        <form method="post">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={this.state.title}
                onChange={(e) => this.setState({
                  ...this.state,
                  title: e.target.value
                })}
              />
            </div>
          </div>
          <div className="form-group row mt-3">
            <label className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={this.state.description}
                onChange={(e) => this.setState({
                  ...this.state,
                  description: e.target.value
                })}/>
            </div>
          </div>
          <div className="form-group row mt-3">
            <label className="col-sm-2 col-form-label">Status</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={this.state.status}
                onChange={(e) => this.setState({
                  ...this.state,
                  status: e.target.value
                })}
              />
            </div>
          </div>
          <div className="form-group row mt-3">
            <label className="col-sm-2 col-form-label">Due Date</label>
            <div className="col-sm-10">
              <input type="date" className="form-control" value={this.state.due_date}
                onChange={(e) => this.setState({
                  ...this.state,
                  due_date: e.target.value
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