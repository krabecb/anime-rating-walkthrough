import './App.css';
import AnimeList from './AnimeList'
import { useState} from 'react'

function App() {
  //PROPS, STATE, HOOK, EVENTS
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

  return (
    <div className="App">
      <h1>Anime Ratings</h1>
      <div className="anime-container">
        TBD
      </div>
    </div>
  );
}

export default App;
