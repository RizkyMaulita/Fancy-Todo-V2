import axios from '../config/axiosinstance'
import React, {Component} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class CreateTodo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      status: '',
      due_date: ''
    }
  }

  addTodo (e) {
    e.preventDefault()
    axios({
      url: '/todos',
      method: 'POST',
      headers: { access_token: localStorage.getItem('access_token') },
      data: {
        title: this.state.title,
        description: this.state.description,
        status: this.state.status,
        due_date: this.state.due_date
      }
    })
      .then(_ => {
        toast('Successfully created new todo', { position: 'top-center' })
        this.props.status()
        this.props.fetchTodo()
      })
      .catch(err => {
        if(err) {
          err.response.data.messages.map(e => toast.error(e.message, { position: 'top-center' }))
        }
      })
  }
  render () {
    return(
      <div className="container">
        <ToastContainer />
        <form method="post">
          <div className="form-group row my-2">
            <label className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="input your todo's title" 
                onChange={(e)=> this.setState({title: e.target.value})}/>
            </div>
          </div>
          <div className="form-group row my-2">
            <label className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="input your todo's description" 
                onChange={(e)=> this.setState({description: e.target.value})}/>
            </div>
          </div>
          <div className="form-group row my-2">
            <label className="col-sm-2 col-form-label">Status</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="input your todo's status" 
                onChange={(e)=> this.setState({status: e.target.value})}/>
            </div>
          </div>
          <div className="form-group row my-2">
            <label className="col-sm-2 col-form-label">Due Date</label>
            <div className="col-sm-10">
              <input type="date" className="form-control" placeholder="input your todo's due_date" 
                onChange={(e)=> this.setState({due_date: e.target.value})}/>
            </div>
          </div>
          <div className="form-group row my-4">
            <div className="d-flex justify-content-center">
              <button className="btn btn-add" type="submit" onClick={(e) => this.addTodo(e)}>Create</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}