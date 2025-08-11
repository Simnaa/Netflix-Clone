import React, { useEffect,useState } from 'react'
import  {useRef} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'


const TitleCards = ({title, category}) => {

const [apiData,setApiData]=useState([]);
const cardsRef=useRef();
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmE3ZmVhNjhjZTI0MDA5MDBmNjlkN2I1MjRmZmY5ZiIsIm5iZiI6MTc0MDA5MTI1OS43OTgsInN1YiI6IjY3YjdhZjdiMjFkNDcwOGI2MGViMWRmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G05xdAM9dFY8SOuPpCUDPmeapiaGDSIaneRx8LeUGto'
    }
  };
  
const handlewheel=(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft+=event.deltaY;
}


useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${ category? category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handlewheel);
},[])

    return (
        <div className='title-cards'>
            <h2>{title?title:"Popular on Netflix"}</h2>
            <div className='card-list' ref={cardsRef}>
                {apiData.map((card, index) => {

                    return <Link to={`/player/${card.id}`}className='card' key={index}>
                        <img src={'https://image.tmdb.org/t/p/w500'+card.
                        backdrop_path} alt="" />
                        <p>{card.original_title}</p>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default TitleCards