import './App.css';
import AnimeList from './AnimeList'
import { useState, useEffect } from 'react'

function App() {
  //PROPS✅, STATE✅, HOOK✅, EVENTS
  const [animes, setAnimes] = useState([
    {
      name: "Demon Slayer",
      rating: null
    },
    {
      name: "Jujutsu Kaisen",
      rating: null
    },
    {
      name: "Attack on Titan",
      rating: null
    },
  ])

  useEffect(() => {

  }, [animes])

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
      { animesListed }
    </div>
  );
}

export default App;
