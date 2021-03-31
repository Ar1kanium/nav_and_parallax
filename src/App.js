import './styles/App.css';
import Navbar from './components/navbar.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home.jsx'
import News from './pages/News.jsx'
import Services from './pages/Services.jsx'
import Career from './pages/Career.jsx'
import SocialResponsibilities from './pages/SocialResponsibilities.jsx'
import FirstPage from './pages/FirstPage.jsx'



function App() {
  return (
    <div className='wrapper'>
        <Router>
        <Navbar/>
        <Switch>
        <Route exact path= '/'>
            <FirstPage />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/news'>
            <News />
          </Route>
          <Route path='/career'>
            <Career />
          </Route>
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='/social_responsibilities'>
            <SocialResponsibilities />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
