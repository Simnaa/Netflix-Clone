import React, { useEffect,useState } from 'react'
import './Player.css'
import arrow from '../assets/arrow.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
    const {id} = useParams();
    const navigate = useNavigate();

const [apiData,setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
})
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmE3ZmVhNjhjZTI0MDA5MDBmNjlkN2I1MjRmZmY5ZiIsIm5iZiI6MTc0MDA5MTI1OS43OTgsInN1YiI6IjY3YjdhZjdiMjFkNDcwOGI2MGViMWRmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G05xdAM9dFY8SOuPpCUDPmeapiaGDSIaneRx8LeUGto'
        }
      };
useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
},[])

  return (
    <div className="player">
    <img src={arrow} alt="" onClick={()=>{navigate(-2)}} />
    <iframe width='90%' height='90%'
    src={`https://www.youtube.com/embed/${apiData.key}`} title='Trailer' frameBorder='0' allowFullScreen></iframe>
    <div className="player-info">
    <p>{apiData. published_at.slice(0,10)}</p>
      <p>{apiData.name}</p>
      <p>{apiData.type}</p>
    </div>
   </div>
  )
}

export default Player