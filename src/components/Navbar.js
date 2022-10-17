import pokedex from './pokedex.png'

export const Navbar = () => {

    return (
        <div className="logo">
            <div className='name'><h6>Gotta catch 'em all ! <br></br> Made by Luis Miguel Mendoza.</h6></div>
            <img src={pokedex} alt="logo"></img>
        </div>
    )
}