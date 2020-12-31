import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const guard = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render = {(props) => {
      if (localStorage.getItem('access_token')) return <Component {...props} />
      return <Redirect to="/login" />
    }}/>
  )
}

export default guard