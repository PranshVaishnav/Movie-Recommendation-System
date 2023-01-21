import React from 'react'
import BannerCard from '../Banner/BannerCard/BannerCard';
import Footer from '../Footer/Footer';
import SimpleSlider from '../Slider/Slider';



/*
  Popular On Nextflix   /movie/popular
  Horror Movies     /discover/movie  &with_genres=27
  Trending Now      /trending/all/day
  Comedies          /discover/movie  &with_genres=35
  Action           /discover/movie  &with_genres=28
  Mystery            /discover/movie  &with_genres=9648
  Animation        /discover/movie  &with_genres=16
  Drama           /discover/movie  &with_genres=18
*/

function Home(props) {
   
  
  return (
    <>
      <div style={{ zIndex:'2',position: "absolute", top: "2vh", left: '-10vw',width: "100%"}}>
        {
          (props.hook) ? <BannerCard hook={props.hook} func={props.func}/> : null
        }
        </div>
        <div style={{ position: "relative", top: "550px", left: 0,width: "100%",filter:`${props.filt}` }}>
        <SimpleSlider title="Popular on NextFlix" start="/movie/popular" end=""></SimpleSlider>
        <SimpleSlider title="Horror Movies" start="/discover/movie" end="&with_genres=27"></SimpleSlider>
        <SimpleSlider title="Trending Now" start="/trending/all/day" end=""></SimpleSlider>
        <SimpleSlider title="Comedies" start="/discover/movie" end="&with_genres=35"></SimpleSlider>
        <SimpleSlider title="Action" start="/discover/movie" end="&with_genres=28"></SimpleSlider>
        <SimpleSlider title="Mystery" start="/discover/movie" end="&with_genres=9648"></SimpleSlider>
        <SimpleSlider title="Animation" start="/discover/movie" end="&with_genres=16"></SimpleSlider>
        <SimpleSlider title="Drama" start="/discover/movie" end="&with_genres=18"></SimpleSlider>
        <Footer></Footer>
        </div>
    </>
  )
}

export default Home