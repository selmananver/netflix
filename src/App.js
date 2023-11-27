import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import RowPost from './Components/RowPost';
import Login from './Components/Login';
import {action,originals} from './Components/urls';
import { useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import Register from './Components/Register'
import MovieDetail from "./Components/MovieDetail";
import SearchPage from "./Components/SearchPage";
import SearchResult from "./Components/SearchResult";
import ProtectedRoute from './Components/ProtectedRoute';
import BrowseMovies from './Components/BrowseMovies';
import {requests} from './constants/Constant'
function App() {
  const token =localStorage.getItem('accessToken')
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route exact path ='/' element={token ?<Navigate to ='/home'/>:<Login/>} />
         <Route path="/register" element={token ?<Navigate to ='/home'/>:<Register/>} />
         <Route path="/home" element={[<ProtectedRoute><Navbar />,<Banner/>,<RowPost title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginalsTV}/>,<RowPost title ='Action' isSmall fetchUrl={requests.fetchActionMovies} /></ProtectedRoute>]}/>
         <Route path="/Searchpage"  element={<ProtectedRoute><SearchPage/></ProtectedRoute>}/>
          <Route path="/Searchpage/:titlename"  element={<ProtectedRoute><SearchResult/></ProtectedRoute>}/>
          <Route path="/:cat/:id"  element={<ProtectedRoute><MovieDetail/></ProtectedRoute>} />
          <Route path ="/browse/:param" element ={<BrowseMovies/>}/>
        </Routes>
      </Router>
   </div>
  );
}

export default App;
