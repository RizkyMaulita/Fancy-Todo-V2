// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Edit from './pages/Edit.jsx'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React, {useState, useEffect} from 'react';


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
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact 
            render={(props) => <Login {...props} setIsLogin={(status) => setIsLogin(status)} ></Login> }
          ></Route>
          <Route path="/todos/:id" exact component={Edit}></Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
