import React, { Component} from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  // constructor (props) {
  //   super(props)
  // }
  checkLogin () {
    if (localStorage.getItem('access_token')) return true
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
  logout (e) {
    localStorage.removeItem('access_token')
    this.props.history.push('/login')
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
                  <button className="btn nav-link active">Home</button>
                </li>
              </ul>
              <div className="d-flex">
                {!localStorage.getItem('access_token') && <button className="btn p-2"><Link to="/login" className="link-login">Login</Link></button> }
                {localStorage.getItem('access_token') && <button className="btn p-2" onClick={(e) => this.logout(e)}>Logout</button> }
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }


}