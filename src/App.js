import './styles/App.css';
import Navbar from './components/navbar.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {
  return (
    <>
      <div className='pimg1'></div>
      <div><p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Quia error corrupti obcaecati tempore itaque quae nobis vel minima provident, i
        ste dolores minus ullam. Voluptas assumenda aperiam velit in omnis nisi cumque 
        culpa. Quae tempore impedit, animi, provident delectus natus alias odio quod 
        labore quibusdam expedita consequatur libero, nostrum saepe magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Quia error corrupti obcaecati tempore itaque quae nobis vel minima provident, i
        ste dolores minus ullam. Voluptas assumenda aperiam velit in omnis nisi cumque 
        culpa. Quae tempore impedit, animi, provident delectus natus alias odio quod 
        labore quibusdam expedita consequatur libero, nostrum saepe magni</p></div>
        <div className='pimg2'> </div>
        <div><p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Quia error corrupti obcaecati tempore itaque quae nobis vel minima provident, i
        ste dolores minus ullam. Voluptas assumenda aperiam velit in omnis nisi cumque 
        culpa. Quae tempore impedit, animi, provident delectus natus alias odio quod 
        labore quibusdam expedita consequatur libero, nostrum saepe magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Quia error corrupti obcaecati tempore itaque quae nobis vel minima provident, i
        ste dolores minus ullam. Voluptas assumenda aperiam velit in omnis nisi cumque 
        culpa. Quae tempore impedit, animi, provident delectus natus alias odio quod 
        labore quibusdam expedita consequatur libero, nostrum saepe magni</p></div>
        <div className='pimg3'></div>
        <Router>
        <Navbar/>
        <Switch>
          <Route path='/'></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
