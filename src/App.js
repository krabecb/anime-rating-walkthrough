import './App.css';
import AnimeList from './AnimeList'
import { useState} from 'react'

function App() {
  //PROPS, STATE✅, HOOK✅, EVENTS
  const [animes, setAnimes] = useState([
    {
      name: "Demon Slayer",
      imgSrc: "https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg",
      rating: null
    },
    {
      name: "Jujutsu Kaisen",
      imgSrc: "https://m.media-amazon.com/images/M/MV5BMTMwMDM4N2EtOTJiYy00OTQ0LThlZDYtYWUwOWFlY2IxZGVjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      rating: null
    },
    {
      name: "Attack on Titan",
      imgSrc: "https://m.media-amazon.com/images/M/MV5BNDFjYTIxMjctYTQ2ZC00OGQ4LWE3OGYtNDdiMzNiNDZlMDAwXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_FMjpg_UX1000_.jpg",
      rating: null
    },
  ])
  
  //The reason I have handleRating right on the highest level is so that I can use the setAnimes method in the useState hook above

  function handleRating(e, title) {
    // e.preventDefault()
    // console.log(parseInt(e.target.defaultValue))
    // console.log(title)
    // updatedAnimes will reflect the user's star rating input. This is an array of all our data, but only updates the rating system changed.
    const updatedAnimes = animes.map(currentIteration => {
      //If the current show title matches the title the user interacted with, then update the rating
      if (currentIteration.name === title) {
        currentIteration.rating = parseInt(e.target.defaultValue)
      }
      return currentIteration
    })
    //Update our useState hook with the updated rating and all our other previous data
    //SetAnimes is async -> when the process of setting the updated array, the component will rerender
    setAnimes(updatedAnimes)
  }

  const animesListed = animes.map((eachAnime, idx) => (
    //eachAnime has these properties available in our AnimeList component: name, imgSrc, and rating
    // First iteration example: AnimeList component has the key-values: name: "Demon Slayer", imgSrc: "https://...", rating: null
    <AnimeList key={idx} anime={eachAnime} handleRating={handleRating} setAnimes={setAnimes}/>
  ))

  return (
    <div className="App">
      <h1>Anime Ratings</h1>
      <div className="anime-container">
        {animesListed}
      </div>
    </div>
  );
}

export default App;
