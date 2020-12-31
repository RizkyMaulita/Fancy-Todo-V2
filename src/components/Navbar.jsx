import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout.jsx'

export default class Navbar extends Component {
  // constructor (props) {
  //   super(props)
  // }
  checkLogin () {
    if (this.props.isLogin) return true
    return false
  }

  componentWillMount () {
    this.checkLogin()
    localStorage.getItem('access_token')
  }
  componentDidMount () {
    this.checkLogin()
    localStorage.getItem('access_token')
  }
  
  render () {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-nav">
          <div className="container-fluid">
            <button className="btn navbar-brand">Fancy Todo</button>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto p-2 mb-lg-0">
                <li className="nav-item">
                  <button className="btn nav-link active"><Link to="/" className="link-login">Home</Link> </button>
                </li>
              </ul>
              <div className="d-flex">
                {!this.props.isLogin && <button className="btn p-2"><Link to="/login" className="link-login">Login</Link></button> }
                {!this.props.isLogin && <button className="btn p-2"><Link to="/register" className="link-login">Register</Link></button> }
                {this.props.isLogin && <Logout setIsLogin={(status) => this.props.setIsLogin(status)} ></Logout> }
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }


}