import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import RowPost from './Components/RowPost';
import Login from './Components/Login';
import {action,originals} from './Components/urls';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Register from './Components/Register'
function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route exact path='/'  element={[<Navbar/>,<Banner/>,<RowPost title='Netflix Originals' url={originals}/>,<RowPost title ='Action' isSmall url={action} />]}/>
         <Route path="/login" element={<Login/>} />
         <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
   </div>
  );
}

export default App;
