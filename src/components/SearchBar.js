import { useState } from "react";
import { searchPokemon } from "../api";
import x from "./x.png"



export const SearchBar = () => {
    const [search, setSearch] = useState('')
    const [pokemon, setPokemon] = useState('')
    
    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handleClick = async (e) => {
        e.preventDefault()
        const data = await searchPokemon(search)
        search === ""  ? alert("Write a valid Pokemon name") : setPokemon(data)
        
        setSearch('')    
    }

    const handleClose = (e) => {
        e.preventDefault()
        setPokemon('')
    }
    
    return (
        <div>
            <h2>Direct Search</h2>
            <form className="directSearchbar">
                
                <input onChange={handleChange} placeholder="all generations (#898)" value={search}></input>
                <button className="button" onClick={handleClick} >search</button>
            </form>
            {pokemon &&
            <div className="pokeInfo">
                <div className="close">
                    <button onClick={handleClose}><img src={x} alt='x'></img></button>
                    <h1>{pokemon.name.toUpperCase()}</h1>
                </div>
                <div>
                    <h3>TYPE</h3>
                    {pokemon.types.map((ab, i) => <div key={i}>{ab.type.name.toUpperCase()}</div>)}
                </div>
                <div>
                    <h3>STATS</h3>
                    {pokemon.stats.map((stat, i) => {
                        return (<div key={i}>{stat.stat.name.toUpperCase()}: {stat.base_stat}</div>)
                    }
                    )}
                </div>
                <div>
                    <img className="pokemonImg" src={pokemon.sprites.front_default} alt="img"/>
                    <img className="shinyImg" src={pokemon.sprites.front_shiny} alt="img"/>
                </div>

                
            </div>

            }
        </div>
        
    )
}