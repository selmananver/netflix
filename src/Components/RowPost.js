import React,{useState,useEffect} from 'react'
import './RowPost.css';
import axios from './axios';
import {apikey, imageurl} from '../constants/Constant'
import YouTube from 'react-youtube'
function RowPost(props) {
    const[movies,setmovies]= useState([])
    const[urlId,setUrlId]=useState('')
//     useEffect(()=>{
//      axios.get(props.url).then((response)=>{
//       console.log(movies);
//         setmovies(response.data.results);
//     }).catch(err=>{
//         // alert('error')
//     })
// },[])
useEffect(() => {
    axios.get(props.fetchUrl).then((response)=>{
      setmovies(response.data.results);
    })
    },[])

const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
const handlemovie =(id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${apikey}&language=en-US`).then((response)=>{
        console.log(response.data);
        if(response.data.results.length!==0){
          setUrlId(response.data.results[0]);
        }
        else{
            console.log('Array empty')
        }
    })
}
  return (
    <div className='row'>
        <h2 style={{marginLeft:"30px"}}>{props.title}</h2>
        <div className='posters'>
            { movies?.map((obj)=>
            <img onClick={()=>handlemovie(obj.id)} className={props.isSmall? 'smallPoster':'poster'} alt='poster' src={`${imageurl+obj.backdrop_path}`}/>
            )}

            

        </div>
        {urlId && <YouTube videoId={urlId.key} opts={opts}/> }
    </div>
  )
}

export default RowPost
