import React, {Component} from 'react'
import login from '../assets/img/login.svg'
import {Redirect} from 'react-router-dom'
export default class Login extends Component {
  login (e) {
    e.preventDefault()
    return <Redirect to="/" />
  }
  render () {
    return (
      <div className="row container-fluid p-5">
        <div className="card col-6 mx-2 p-4">
          <h1 className="text-center my-3"> Login </h1>
          <form>
            <div className="form-group row my-3">
              <label className="col-form-label col-2"> Email </label>
              <div className="col-10">
                <input type="email" placeholder="input your email"className="form-control"></input>
              </div>
            </div>
            <div className="form-group row my-3">
              <label className="col-form-label col-2"> Password </label>
              <div className="col-10">
                <input type="password" placeholder="input your password"className="form-control"></input>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-login" onSubmit={ (e) => this.login(e)}>Sign In</button>
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