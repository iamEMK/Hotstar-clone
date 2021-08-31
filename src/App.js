import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './component/Login';
import Header from './component/Header';
import Home from './component/Home';
import Movies from './Data/Movies';
import Detail from './component/Detail';

function App() {
  return (
    <div className="App">
        <Router>
                <Header/>
              <Switch>
              <Route exact path="/">
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/movie">
            <Movies/>
          </Route>
          <Route path="/detail/:id">
            <Detail/>
          </Route>
             </Switch>
        </Router>
    </div>
  );
}
export default App;
