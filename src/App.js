import './App.css';
import AnimeList from './AnimeList'
import { useState} from 'react'

function App() {
  //PROPS✅, STATE✅, HOOK✅, EVENTS✅
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

  function handleRating(e, title) {
    e.preventDefault()
    // console.log(parseInt(e.target.defaultValue), title)
    // PROVIDE EXPLANATION OF MAP
    const updatedAnimes = animes.map(anime => {
      if (anime.name === title) {
        anime.rating = parseInt(e.target.defaultValue)
      }
      return anime
    })
    setAnimes(updatedAnimes)
  }

  const animesListed = animes.map((eachAnime, idx) => (
    <AnimeList key={idx} anime={eachAnime} handleRating={handleRating}/>
  ))

  return (
    <div className="App">
      <h1>Anime Ratings</h1>
      <div className="anime-container">
        { animesListed }
      </div>
    </div>
  );
}

export default App;