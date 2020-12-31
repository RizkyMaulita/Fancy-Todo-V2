import React, {Component} from 'react'
import login from '../assets/img/login.svg'
import axios from '../config/axiosinstance'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  login (e) {
    e.preventDefault()
    const payload = {
      email: this.state.email,
      password: this.state.password
    }
    axios({
      url: '/login',
      method: 'POST',
      data: payload
    })
      .then(({data}) => {
        console.log(data)
        localStorage.setItem('access_token', data.accessToken)
        this.props.setIsLogin(true)
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }
  render () {
    return (
      <div className="row container-fluid p-5">
        <div className="card col-6 mx-2 p-4">
          <h1 className="text-center my-3"> Login </h1>
          <form method="POST">
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
              <button type="submit" className="btn btn-login" onClick={ (e) => this.login(e)}>Sign In</button>
            </div>
          </form>
        </div>
        <div className="card col-5 mx-2">
          <img src={login} class="img-login" alt="img-login"></img>
        </div>
      </div>
    )
  }


}