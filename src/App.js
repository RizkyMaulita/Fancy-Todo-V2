// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App, container-fluid">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
