import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import RowPost from './Components/RowPost';
import Login from './Components/Login';
import { useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import Register from './Components/Register'
import MovieDetail from "./Components/MovieDetail";
import SearchPage from "./Components/SearchPage";
import SearchResult from "./Components/SearchResult";
import BrowseMovies from './Components/BrowseMovies';
import {requests} from './constants/Constant'
import { useStateValue } from './ContextApi/StateProvider';
import { actionType } from './ContextApi/reducer';
import {auth} from './firebase/config';
function App() {
  const[ {user}, dispatch] = useStateValue();
  useEffect(()=>{
    const listener = auth.onAuthStateChanged((authuser)=>{
      if(authuser){
        dispatch({
          type:actionType.SET_USER,
          user:authuser
        })
      }
      else{
        dispatch({
          type:actionType.SET_USER,
          user:null
        })
      }
    })
      return ()=>listener();
      },[dispatch])
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route exact path ='/netflix' element={user ?<Navigate to ='/home'/>:<Login/>} />
         <Route path="/register" element={user ?<Navigate to ='/home'/>:<Register/>} />
         <Route path="/home" element={user?([<Navbar/>,<Banner/>,<RowPost title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginalsTV}/>,<RowPost title ='Action' isSmall fetchUrl={requests.fetchActionMovies}/>]):<Navigate to ='/netflix'/>}/>
         <Route path="/Searchpage"  element={user ?<SearchPage/>:<Navigate to ='/netflix'/>} />
          <Route path="/Searchpage/:titlename"  element={user ?<SearchResult/>:<Navigate to ='/netflix'/>}/>
          <Route path="/:cat/:id"  element={user?<MovieDetail/>:<Navigate to ='/netflix'/>} />
          <Route path ="/browse/:param" element ={user?<BrowseMovies/>:<Navigate to ='/netflix'/>}/>
        </Routes>
      </Router>
   </div>
  );
}

export default App;
