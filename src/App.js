// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Edit from './pages/Edit.jsx'
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import React, {useState, useEffect} from 'react';
import Guard from './middlewares/guards.jsx'

function App() {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('access_token')) setIsLogin(true)
  }, [isLogin])

  return (
    <Router>
      <div className="App, container-fluid">
        <Navbar setIsLogin={(status) => setIsLogin(status)} isLogin={isLogin} />
        <Switch>
          <Guard path="/" exact component={Home} />
          <Route path="/login" exact 
            render={(props) => {
              if (localStorage.getItem('access_token')) return <Redirect to='/' />
              return <Login {...props} setIsLogin={(status) => setIsLogin(status)} ></Login> 
            }}
           />
          <Guard path="/todos/:id" exact component={Edit}/>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
