import './styles/App.css';
import Navbar from './components/navbar.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home.jsx'



function App() {
  return (
    <>

        <Router>
        <div>
        <Navbar/>
        <Switch>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
