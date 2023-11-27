import React,{useEffect,useState} from 'react'
import axios from './axios'
import {apikey,imageurl} from '../constants/Constant'
import './Banner.css';
import {requests} from '../constants/Constant'
import {useNavigate} from 'react-router-dom';
function Banner() {
    const[movie,setMovie] = useState('')
    const navigate = useNavigate();
    useEffect(()=>{
      async function fetchdata(){
      let bannerData = requests.fetchNetflixOriginalsTV;

      if (navigate == "/browse/movies") {
        bannerData = requests.fetchTrendingMovie;
      }
        await axios.get(bannerData).then((response)=>{
          const data = response.data.results.filter(
                    (movie) => movie?.backdrop_path
          );
          setMovie(data[Math.floor(Math.random() * data?.length - 1)]);
    })
  }
  fetchdata();
   //clean up
   return () => {      // source.cancel();
  }
    },[navigate])
  return (
    <div style={{backgroundImage:`url(${movie ? imageurl+movie.backdrop_path:""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie? movie.name:''}</h1>
            <div className='banner_buttons'>
              <button className='button'>Play</button>
              <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie? movie.overview:''}</h1>
            <div className='fade_bottom'>

            </div>
        </div>
    </div>
  )
}

export default Banner

