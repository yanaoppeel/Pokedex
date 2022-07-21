import React from 'react';
import './Pokemons.scss';

export default function Pokemons(props) {
    const items = pokemonsToItems(props.pokemons);

    return (
        <div className='pokemons-container'>
            {items}
        </div>
    );
}

function pokemonsToItems(pokemons) {
    if (!pokemons ) {
        return [];
    }

    return pokemons.map(pokemon => {
        const splitUrl = pokemon.url.split('/')
        const id = splitUrl[splitUrl.length - 2];
        // Build image url
        const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        
        return (
            <div className='pokemon-box'>
                <img src={imgSrc} alt=""></img>
                <p>{pokemon.name}</p>
            </div>
        );
    });
}
