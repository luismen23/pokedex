import './App.css';
import { Navbar } from './components/Navbar';
import { Filter } from './components/Filter';
import { useState, useEffect} from 'react';
import { getPokemonData, getPokemons} from "./api";
import { Loader } from './components/Loader';




function App() {
  // const [search, setSearch] = useState('')
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchPokemon = async () => {
    try {
      const data = await getPokemons();
      
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(true)
      // console.log(results)
    } catch(err) {

  }
  } 

  useEffect(() => {
    fetchPokemon()
  },[])

 

  return (
    <div className="App">
      <Navbar/>
      {loading ? <Filter  pokemons={pokemons}/> : <Loader/>}
    </div>
  );
}

export default App;
