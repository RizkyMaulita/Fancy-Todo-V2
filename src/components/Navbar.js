import React, { Component} from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  checkLogin () {
    if (localStorage.getItem('access_token')) return true
    return false
  }

  render () {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-nav">
          <div class="container-fluid">
            <button class="btn navbar-brand">Navbar</button>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <button class="btn nav-link active">Home</button>
                </li>
              </ul>
            </div>
            <div class="d-flex">
              {this.checkLogin && <button class="btn p-2"><Link to="/login">Login</Link></button> }
              {!this.checkLogin && <button class="btn p-2">Logout</button> }
            </div>
          </div>
        </nav>
      </div>
    )
  }


}