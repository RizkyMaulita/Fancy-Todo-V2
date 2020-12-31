import React, {Component} from 'react'
import register from '../assets/img/register.svg'
import axios from '../config/axiosinstance'

export default class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }
  register (e) {
    e.preventDefault()
    const payload = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    axios({
      url: '/register',
      method: 'POST',
      data: payload
    })
      .then(({data}) => {
        this.props.history.push('/login')
      })
      .catch(err => {
        console.log(err)
      })
  }
  render () {
    return (
      <div className="row container-fluid p-5">
        <div className="card col-8 p-4">
          <h1 className="text-center my-3"> Register </h1>
          <form method="POST">
          <div className="form-group row my-3">
              <label className="col-form-label col-2 col-sm-2"> Username </label>
              <div className="col-10">
                <input type="text" placeholder="input your username"className="form-control"
                  onChange={(e) => this.setState({ username: e.target.value })}
                ></input>
              </div>
            </div>
            <div className="form-group row my-3">
              <label className="col-form-label col-2 col-sm-2"> Email </label>
              <div className="col-10">
                <input type="email" placeholder="input your email"className="form-control"
                  onChange={(e) => this.setState({ email: e.target.value })}
                ></input>
              </div>
            </div>
            <div className="form-group row my-3">
              <label className="col-form-label col-2 col-sm-2"> Password </label>
              <div className="col-10">
                <input type="password" placeholder="input your password"className="form-control"
                  onChange={(e) => this.setState({password: e.target.value})}
                ></input>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-login" onClick={ (e) => this.register(e)}>Sign Up</button>
            </div>
          </form>
        </div>
        <div className="card col-3 cols-sm-6 m-2">
          <img src={register} className="img-regist" alt="img-regist"></img>
        </div>
      </div>
    )
  }
}