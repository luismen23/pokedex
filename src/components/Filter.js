import { useState } from "react"
import { PokeCard } from "./PokeCard";
import { SearchBar } from './SearchBar';



export const Filter = (props) => {
    const {pokemons} = props

    const [query, setQuery] = useState('');
    
    const handleChange = (event) => {
        setQuery(event.target.value)
    }

    const lowerCasedQuery = query.toLowerCase();

    return (
        <div>
            <div className="searchBar">
                
                <div>
                    <h2>Filtered Search</h2>
                    <input onChange={handleChange} value={lowerCasedQuery} placeholder='until the fifth gen (#649)'/>
                </div>
                <SearchBar/>
            </div>
            <div className="pokemons">
                {
                pokemons
                .filter((pokemon) => (pokemon.name.toLowerCase().includes(lowerCasedQuery) || pokemon.id.toString().includes(query)))
                .map((pokemon, i) => (<PokeCard pokemons={pokemon} key={i}/>))
                }
            </div>
            
        </div>
    )
}