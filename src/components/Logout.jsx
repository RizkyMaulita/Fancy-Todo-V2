import React from 'react'
import {useHistory} from 'react-router-dom'

export default function LogoutButton (props) {
  const history = useHistory()

  function logout (e) {
    e.preventDefault()
    localStorage.removeItem('access_token')
    props.setIsLogin(false)
    history.push('/login')
  }
  
  return <button className="btn p-2" onClick={(e) => logout(e)}>Logout</button>
}