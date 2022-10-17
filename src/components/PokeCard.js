
export const PokeCard = (props) => {
    const {pokemons} = props

    return (
        <div className="pokeCard">
            <div className="pokeName">
                <h3>{pokemons.name}</h3>
                <img src={pokemons.sprites.front_default} alt={pokemons.name} />
            </div>
            <div className="pokeTypes">
                <h4>Type</h4>
                <div className="types">
                    {pokemons.types.map((pokemon, i) => <div key={i}>{pokemon.type.name}</div>)}
                </div>
            </div>
            <div className="pokeStats">
                <h4>Base Stats</h4>
                <div className="stats">
                    {pokemons.stats.map((stat, i) => {
                    return (<div key={i}>{stat.stat.name}: {stat.base_stat}</div>)
                    }
                    )}
                </div>
            </div>
            <div>
                <h4>Pokedex #</h4>
                <div className="pokeNumber">{pokemons.id}</div>
            </div>
        </div>
    )

}