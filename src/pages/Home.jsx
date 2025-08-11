import React from 'react'
import Navbar from '../components/Navbar'
import cover from '../assets/cover.png'
import caption from '../assets/caption.png'
import './home.css'
import play from '../assets/play.gif'
import info from '../assets/info.png'
import TitleCards from '../components/TitleCards/TitleCards'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
    <Navbar />
    <div className='cover'>
        <img src={cover} alt="" style={{width:'100%'}}/>
    <div className='caption'>
        <img src={caption} alt="" className='titleimg'/>
        <p>Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.</p>
   <div className='buttondiv'>
    <button className='play'><img src={play} alt='' style={{width:'30px',height:'37px',marginRight:'120px',marginTop:'5px'}}/><h3 style={{position:'relative',bottom:'35px',left:'10px'}}>Play</h3></button>
    <button className='info'><img src={info} alt=''style={{width:'25px',marginRight:'7px',marginTop:'2px'}}/>More Info</button>
    </div> 
    <TitleCards/>
</div>
    </div>
    <div className='more-cards'>
    <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
    <TitleCards title={"Only on Netflix "} category={"popular"}/>
    <TitleCards title={"Upcoming"} category={"upcoming"}/>
    <TitleCards title={"Top Picks for You"}category={"now_playing"}/>
    </div>
<Footer/>
    </div>
  )
}

export default Home