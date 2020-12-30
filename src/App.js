// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Home from './pages/Home.jsx'
import Edit from './pages/Edit.jsx'

import { BrowserRouter as Router, Route, useHistory} from 'react-router-dom'
import { Fragment } from 'react';

function App() {
  let history = useHistory()
  return (
    <Router>
      <div className="App, container-fluid">
        <Fragment>
          <Navbar history={history} />
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/todos/:id" exact component={Edit}></Route>
        </Fragment>
      </div>

    </Router>
  );
}

export default App;
